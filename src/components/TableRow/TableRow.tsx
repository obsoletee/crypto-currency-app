import React, { FC, useState } from "react";
import styles from './TableRow.module.scss';
import AddButton from "../UI/Button/Button";

export interface TableRowData {
	symbol: string;
	price: string;
	marketCap: string;
	change: string;
	coinId: string;
}

const TableRow: FC<TableRowData> = ({symbol, price, marketCap, change, coinId}) => {
	
	const LOGO_LINK = "https://assets.coincap.io/assets/icons/" + symbol.toLowerCase() + "@2x.png"

	return (
		<tr className={styles.tableBodyRow}>
				<td key='symbol' className={styles.tableBodyCell}>{symbol}</td>
				<td key="logo" className={styles.tableBodyCell}><img width='32px' height="32px" src={LOGO_LINK} alt="logo"/></td>
				<td key="price" className={styles.tableBodyCell}>{Number(price).toFixed(2)}</td>
				<td key="marketCap" className={styles.tableBodyCell}>{Number(marketCap).toFixed(2)}</td>
				{Number(change) > 0
					? <td key="" style={{color: "green"}} className={styles.tableBodyCell}>{Number(change).toFixed(2)}</td>
					: <td style={{color: "red"}} className={styles.tableBodyCell}>{Number(change).toFixed(2)}</td>
				}
				<td className={styles.tableBodyCell}><AddButton>Add To Portfolio</AddButton></td>
		</tr>
	)
}

export default TableRow;