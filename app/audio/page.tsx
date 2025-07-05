'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './page.module.css';
import { audioByYear } from '../data/audio';
import Image from 'next/image';

// New minimalist photo component for audio page
function AudioComedienPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ width: 175, height: 226, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        src={src}
        alt={alt}
        width={175}
        height={226}
        style={{ objectFit: 'cover', borderRadius: 0 }}
      />
    </div>
  );
}

export default function AudioPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const [progress, setProgress] = useState(0); // seconds
  const [duration, setDuration] = useState(0); // seconds

  // Update progress as audio plays
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => setProgress(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [currentAudio]);

  const handlePlayAudio = (audioUrl: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentAudio(audioUrl);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 0);
  };

  const handlePauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const value = Number(e.target.value);
      audioRef.current.currentTime = value;
      setProgress(value);
    }
  };

  // Format time as mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* -----  Page Audio -----  */}
      <div className={styles.container}>
        {/* -----  Titre de la page  -----  */}
        {audioByYear.map((yearBlock) => (
          <section key={yearBlock.year} style={{ marginBottom: '3rem' }}>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>
              {yearBlock.title}
            </h1>
            {/* One column per audio: photo + info + controls vertically grouped */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              {yearBlock.audios.map((audio, idx) => (
                <div
                  key={idx}
                  style={{
                    width: 175,
                    minHeight: 420,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <AudioComedienPhoto
                    src={audio.lecteur_photo}
                    alt={`Photo de ${audio.lecteur}`}
                  />
                  <div style={{ fontWeight: 'bold', color: '#B30000', fontSize: 20, marginTop: 8 }}>
                    {audio.lecteur}
                  </div>
                  <div style={{ fontSize: 16 }}>
                    {audio.auteur && <>lit {audio.auteur},</>}
                  </div>
                  <div style={{ fontStyle: 'italic', fontSize: 18 }}>{audio.titre}</div>
                  <div style={{ fontSize: 15 }}>
                    {audio.date} {audio.lieu && audio.lieu}
                  </div>
                  <div
                    className={styles.audioEmoticon}
                    style={{
                      fontSize: '2rem',
                      cursor: 'pointer',
                      marginTop: '0.5rem',
                      display: 'flex',
                      gap: '0.5rem',
                      justifyContent: 'center',
                    }}
                    title="Contrôles audio"
                  >
                    <span
                      onClick={() => handlePlayAudio(audio.audioSrc)}
                      title="Écouter l'extrait"
                      style={{ userSelect: 'none' }}
                    >
                      🔊
                    </span>
                    <span
                      onClick={handlePauseAudio}
                      title="Mettre en pause"
                      style={{ userSelect: 'none' }}
                    >
                      ⏸️
                    </span>
                  </div>
                  {currentAudio === audio.audioSrc && (
                    <div
                      style={{
                        width: '100%',
                        marginTop: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ fontSize: '0.9rem', minWidth: 38 }}>
                        {formatTime(progress)}
                      </span>
                      <input
                        type="range"
                        min={0}
                        max={duration || 0}
                        value={progress}
                        step={0.1}
                        onChange={handleSeek}
                        style={{ flex: 1 }}
                      />
                      <span style={{ fontSize: '0.9rem', minWidth: 38 }}>
                        {formatTime(duration)}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
        {/* Hidden audio element */}
        <audio ref={audioRef} src={currentAudio || undefined} />
      </div>
    </>
  );
}
