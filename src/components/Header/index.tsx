import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logotipo ig.news" />
        <nav>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/">
            <a>Posts</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}