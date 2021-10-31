// CSS-модули

// Применяются только к этому компоненту и никакому другому

import styles from './header.module.css';

const Header = () => (
    <h1 className={styles.title}>React App  </h1>
  );