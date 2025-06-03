'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import styles from './DropDownMenu.module.css';

type Content = {
  title: string;
  href: string;
};

type DropDownMenuProps = {
  triggerTitle: string;
  contents: [Content, ...Content[]];
};

const DropDownMenu = ({ triggerTitle, contents }: DropDownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles.trigger} onClick={toggleDropdown}>
        {triggerTitle}{' '}
        <ChevronDownIcon className={`${styles.icon} ${isOpen ? styles.rotated : ''}`} />
      </button>
      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        {contents.map((content, key) => (
          <a key={key} href={content.href}>
            {content.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropDownMenu;
