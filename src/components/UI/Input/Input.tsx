import React, { FC } from "react";
import styles from './Input.module.scss'

interface InputProps {
	type: string;
	placeholder?: string;
	onChange?: Function;
	value?: string;
}

const Input: FC<InputProps> = ({type, placeholder, onChange, value}) => {
	return (
		<input value={value} onChange={onChange} className={styles.input} type={type} placeholder={placeholder}/>
	)
}

export default Input;