import React, { FC, useEffect, useState } from "react";
import styles from './Container.module.scss';
import CryptTable from "../CryptTable/CryptTable";
import Loader from "../UI/Loader/Loader";

interface ContainerProps {
	dataError: string;
	isPostLoading: boolean;
	cryptData: object;
	page: number;
	setPage: Function;
}

const Container: FC<ContainerProps> = ({dataError, isPostLoading, cryptData, page, setPage}) => {

	return (
		<div className={styles.tableContainer}>
			{dataError &&
				<div>Произошла ошибка: {dataError}</div>
			}
			{isPostLoading
				? <Loader/>
				: <CryptTable setPage={setPage} page={page} cryptData={cryptData}/>
			}
		</div>
	)
}

export default Container;