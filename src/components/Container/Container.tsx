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
	limit: number;
	setCryptData: Function;
	setSearchQuery: Function;
	searchQuery: string;
}

const Container: FC<ContainerProps> = ({searchQuery, setSearchQuery, limit, setCryptData, dataError, isPostLoading, cryptData, page, setPage}) => {

	return (
		<div className={styles.tableContainer}>
			{dataError &&
				<div>Error: {dataError}</div>
			}
			{isPostLoading
				? <Loader/>
				: <CryptTable setSearchQuery={setSearchQuery} searchQuery={searchQuery} setCryptData={setCryptData} limit={limit} setPage={setPage} page={page} cryptData={cryptData}/>
			}
		</div>
	)
}

export default Container;