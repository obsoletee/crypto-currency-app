import React from "react";
import styles from './header.module.scss';
import logo from "/btc2xicon.png";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.info}>
					<div className={styles.title}>CryptoApp</div>
					<div className={styles.logo}><img src={logo} alt="logo"/></div>
				</div>
				<div className={styles.crypto}>
					<div className={styles.elem}>BTC</div>
					<div className={styles.elem}>ETH</div>
					<div className={styles.elem}>BNB</div>
				</div>
			</div>
		</header>
	)
}