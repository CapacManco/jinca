import React from 'react';
import styles from '../styles/Layout.module.css';

import db from '../utils/firebaseConfig';
// import { collection, addDoc, getDocs } from 'firebase/firestore';

const Discord = () => {
  // const sendInfos = async () => {
  //   const querySnapshot = await getDocs(collection(db, 'users'));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });

  //   try {
  //     const docRef = await addDoc(collection(db, 'users'), {
  //       platform: 'twitter',
  //       username: 'PERUANO#3333',
  //       time: 3,
  //     });
  //     console.log('Document written with ID: ', docRef.id);
  //   } catch (e) {
  //     console.error('Error adding document: ', e);
  //   }
  // };

  return (
    <div className={styles.discord__description}>
      <p>
        <b>1.</b> Join the Discord server{' '}
        <a
          href="https://discord.gg/TjEaD3b4WE"
          className={styles.discord__description__link}
        >
          HERE
        </a>{' '}
        (necessary for the bot to interact with you)
      </p>
      <p>
        <b>2.</b> Go to the channel{' '}
        <span className={styles.discord__description__channel}>
          #confidence-bot
        </span>
      </p>
      <p>
        <b>3.</b> Subscribe to the bot with the command{' '}
        <span className={styles.discord__description__command}>/subscribe</span>{' '}
        <span className={styles.discord__description__option}>frequency</span>
      </p>
      <p className={styles.discord__description__note}>
        <em>
          Frequency can be{' '}
          <span className={styles.discord__description__frequency}>h</span>,{' '}
          <span className={styles.discord__description__frequency}>d</span>,{' '}
          <span className={styles.discord__description__frequency}>w</span> or{' '}
          <span className={styles.discord__description__frequency}>m</span>{' '}
          respectively for one message from the bot per hour, day, week or
          month.
        </em>
      </p>
    </div>
  );
};

export default Discord;
