import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export const SignButton: React.FC = () => {
  const [session] = useSession();

  if(session) {
    return (
      <button 
        className={styles.signInButton} 
        type="button"
        onClick={() => signOut()}
      >
        {session.user.image ? 
          <div className={styles.imageWrapper}>
            <Image 
            src={session.user.image} 
            alt={`Profile picture of user profile github from ${session.user.name}`} 
            height={22} 
            width={22}
            />
          </div> :
          <FaGithub color="#04d361" />
        }
        {session.user.name}
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
    );
  }

  return (
    <button 
      className={styles.signInButton} 
      type="button"
      onClick={() => signIn('github')}
    >
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  );
}
