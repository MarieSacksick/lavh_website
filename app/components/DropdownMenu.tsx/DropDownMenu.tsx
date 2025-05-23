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
  return (
    <div className={styles.dropdown}>
      <button className={styles.trigger}>
        {triggerTitle} <ChevronDownIcon className={styles.icon} />
      </button>
      <div className={styles.content}>
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
