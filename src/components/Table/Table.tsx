import React, { useState } from "react";
import styles from './Table.module.scss';
import TableRow from "../TableRow/TableRow";
import axios from "axios";

export default function Table() {

	async function fetchData() {
		const response = await axios.get("https://api.coincap.io/v2/assets");
		setCryptoData(response.data.data);
	}

	const [cryptoData, setCryptoData] = useState([
		{
			id: "bitcoin", 
			symbol: "BTC", 
			marketCapUsd: "1410364195742.9789512565159342",
			priceUsd: "71559.8674192437989602",
			changePercent24Hr: "0.6686137849831205",
		},
		{
			id: "ethereum",
			symbol: "ETH",
			marketCapUsd: "460340843328.1303693017917610",
			priceUsd: "3831.3984751862040930",
			changePercent24Hr: "-0.5835124007713967",
		},
		{
			id: "binance-coin",
			symbol: "BNB",
			marketCapUsd: "117433168383.0503286037074820",
			priceUsd: "704.0309361842661215",
			changePercent24Hr: "-0.2473200309027192",
		},
	])

	return (
		<div className={styles.tableContainer}>
			<table className={styles.cryptoTable}>
				<thead className={styles.tableHead}>
					<tr>
						<th className={styles.tableHeadCell}>Symbol</th>
						<th className={styles.tableHeadCell}>Logo</th>
						<th className={styles.tableHeadCell}>Price</th>
						<th className={styles.tableHeadCell}>Market Capital</th>
						<th className={styles.tableHeadCell}>Change</th>
						<th className={styles.tableHeadCell}>Actions</th>
					</tr>
				</thead>
				<tbody className={styles.tableBody}>
					{cryptoData.map(data => 
						<TableRow key={data.id} symbol={data.symbol} price={data.priceUsd} marketCap={data.marketCapUsd} change={data.changePercent24Hr}/>
					)}
				</tbody>
			</table>
			<button onClick={fetchData}>ЗАПРОС</button>
		</div>
	)
}