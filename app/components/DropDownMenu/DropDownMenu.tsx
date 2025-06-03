'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import styles from './DropDownMenu.module.css';

/**
 * Type représentant un élément du menu déroulant
 * @interface Content
 * @property {string} title - Le titre de l'élément
 * @property {string} href - L'URL de destination
 */
type Content = {
  title: string;
  href: string;
};

/**
 * Propriétés du composant DropDownMenu
 * @interface DropDownMenuProps
 * @property {string} triggerTitle - Le titre du bouton qui déclenche le menu
 * @property {[Content, ...Content[]]} contents - Tableau d'au moins un élément Content
 */
type DropDownMenuProps = {
  triggerTitle: string;
  contents: [Content, ...Content[]];
};

/**
 * Menu déroulant avec gestion du clic en dehors
 *
 * @component
 * @description
 * Ce composant crée un menu déroulant qui :
 * - S'ouvre/se ferme au clic sur le bouton
 * - Se ferme automatiquement lors d'un clic en dehors
 * - Affiche une liste de liens
 * - Inclut une animation de rotation de l'icône
 *
 * @param {DropDownMenuProps} props - Les propriétés du composant
 * @param {string} props.triggerTitle - Le titre du bouton
 * @param {[Content, ...Content[]]} props.contents - Les éléments du menu
 *
 * @example
 * ```tsx
 * <DropDownMenu
 *   triggerTitle="Menu"
 *   contents={[
 *     { title: "Option 1", href: "/option1" },
 *     { title: "Option 2", href: "/option2" }
 *   ]}
 * />
 * ```
 *
 * @returns {JSX.Element} Le menu déroulant avec son contenu
 */
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
