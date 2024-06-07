import React, { useEffect, useState } from "react";
import styles from './Container.module.scss';
import TableRow from "../TableRow/TableRow";
import axios from "axios";
import Cryptservice from "../../services/CryptService";
import CryptTable from "../CryptTable/CryptTable";
import Loader from "../UI/Loader/Loader";

export default function Container() {

	async function fetchData() {
		setIsPostLoading(true);
		const cryptList = await Cryptservice.getAllData();
		setCryptData(cryptList);
		setIsPostLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, [])

	const [cryptData, setCryptData] = useState([]);
	const [isPostLoading, setIsPostLoading] = useState(false);

	return (
		<div className={styles.tableContainer}>
			{isPostLoading
				? <Loader/>
				: <CryptTable cryptData={cryptData}/>
			}
		</div>
	)
}