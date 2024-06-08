import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.title}>CryptoApp</div>
          <div className={styles.logo}>
            <img
              src={`https://assets.coincap.io/assets/icons/btc@2x.png`}
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.crypto}>
          <div className={styles.elem}>BTC</div>
          <div className={styles.elem}>ETH</div>
          <div className={styles.elem}>BNB</div>
        </div>
      </div>
    </header>
  );
};
