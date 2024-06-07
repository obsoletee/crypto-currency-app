import React, { FC, useState } from "react";
import styles from './TableRow.module.scss';
import AddButton from "../UI/Button/Button";

export interface TableRowData {
	symbol: string;
	price: string;
	marketCap: string;
	change: string;
}

const TableRow: FC<TableRowData> = ({symbol, price, marketCap, change}) => {
	
	return (
		<tr>
				<td key='symbol' className={styles.tableBodyCell}>{symbol}</td>
				<td key="logo" className={styles.tableBodyCell}>logo</td>
				<td key="price" className={styles.tableBodyCell}>{Number(price).toFixed(2)}</td>
				<td key="marketCap" className={styles.tableBodyCell}>{Number(marketCap).toFixed(2)}</td>
				{Number(change) > 0
					? <td key="" style={{color: "green"}} className={styles.tableBodyCell}>{Number(change).toFixed(2)}</td>
					: <td style={{color: "red"}} className={styles.tableBodyCell}>{Number(change).toFixed(2)}</td>
				}
				<td className={styles.tableBodyCell}><AddButton>Добавить</AddButton></td>
		</tr>
	)
}

export default TableRow;