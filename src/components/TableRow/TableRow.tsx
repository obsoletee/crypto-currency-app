import React, { FC, useState } from "react";
import styles from './TableRow.module.scss';

export interface TableRowData {
	symbol: string;
	price: string;
	marketCap: string;
	change: string;
}

const TableRow: FC<TableRowData> = ({symbol, price, marketCap, change}) => {
	return (
		<tr>
				<td className={styles.tableBodyCell}>{symbol}</td>
				<td className={styles.tableBodyCell}>logo</td>
				<td className={styles.tableBodyCell}>{Number(price).toFixed(2)}</td>
				<td className={styles.tableBodyCell}>{Number(marketCap).toFixed(2)}</td>
				{Number(change) > 0
					? <td style={{color: "green"}} className={styles.tableBodyCell}>{Number(change).toFixed(2)}</td>
					: <td style={{color: "red"}} className={styles.tableBodyCell}>{Number(change).toFixed(2)}</td>
				}
				<td className={styles.tableBodyCell}>Action</td>
		</tr>
	)
}

export default TableRow;