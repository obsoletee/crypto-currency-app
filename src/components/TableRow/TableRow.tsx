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
				<td className={styles.tableBodyCell}>{price}</td>
				<td className={styles.tableBodyCell}>{marketCap}</td>
				<td className={styles.tableBodyCell}>{change}</td>
				<td className={styles.tableBodyCell}>Action</td>
		</tr>
	)
}

export default TableRow;