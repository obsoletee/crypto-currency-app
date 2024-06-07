import React, { FC } from "react";
import styles from './Button.module.scss';

interface ButtonProps {
	children?: React.ReactChild | React.ReactDOM;	
	clickHandler?: Event;
}

const Button: FC<ButtonProps> = ({children, clickHandler}) => {

	return (
		<button onClick={clickHandler} className={styles.button}>{children}</button>
	)

}

export default Button;