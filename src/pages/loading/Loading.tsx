import * as styles from './loading.css';

const Loading = () => {
  return (
    <main className={styles.container}>
      <div className={styles.dots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </main>
  );
};

export default Loading;
