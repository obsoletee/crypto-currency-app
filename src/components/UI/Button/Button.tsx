import React, { FC } from "react";
import styles from './Button.module.scss';

interface ButtonProps {
	children?: React.ReactChild | React.ReactDOM;	
	onClick?: Function;
}

const Button: FC<ButtonProps> = ({children, onClick}) => {

	return (
		<button onClick={onClick} className={styles.button}>{children}</button>
	)

}

export default Button;