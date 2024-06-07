import styles from './CryptTable.module.scss';
import TableRow from '../TableRow/TableRow';
import { FC } from 'react';

interface CryptTableProps {
	cryptData: Object;
}

const CryptTable:FC<CryptTableProps> = ({cryptData}) => {
	
	return (
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
				{cryptData.map((data) => <TableRow key={data.id} symbol={data.symbol} price={data.priceUsd} marketCap={data.marketCapUsd} change={data.changePercent24Hr}/>
				)}
			</tbody>
		</table>
	)
}

export default CryptTable;