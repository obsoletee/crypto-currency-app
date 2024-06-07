import React from "react";
import '../css/header.css'
import logo from "/btc2xicon.png"

export default function Header() {
	return (
		<header className='header'>
			<div className="header__container">
				<div className="container__info">
					<div className='container__info__title'>CryptoApp</div>
					<div className="container__info__logo"><img src={logo} alt="logo"/></div>
				</div>
				<div className="container__crypto">
					<div className="container__crypto__elem">BTC</div>
					<div className="container__crypto__elem">ETH</div>
					<div className="container__crypto__elem">BNB</div>
				</div>
			</div>
		</header>
	)
}