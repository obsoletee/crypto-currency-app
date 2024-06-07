import styles from './CryptTable.module.scss';
import TableRow from '../TableRow/TableRow';
import { FC } from 'react';
import Pagination from '../Pagination/Pagination';

interface CryptTableProps {
	cryptData: object;
	page: number;
	setPage: Function
}

const CryptTable: FC<CryptTableProps> = ({cryptData, page, setPage}) => {
	
	const columns = [
    {
      title: 'Symbol',
      key: 'symbol',
    },
    {
      title: 'Logo',
      key: 'logo',
    },
    {
      title: 'Price (USD)',
      key: 'price',
    },
    {
      title: 'Market Cap (USD)',
      key: 'marketCap',
    },
    {
      title: '24h Change (%)',
      key: 'change24h',
    },
    {
      title: 'Add',
      key: 'action',
    },
  ];

	return (
		<>
		<table className={styles.cryptoTable}>
			<thead className={styles.tableHead}>
				<tr>
				{columns.map(elem => <th key={elem.key} className={styles.tableHeadCell}>{elem.title}</th>)}
				</tr>
			</thead>
			<tbody className={styles.tableBody}>
				{cryptData.map(elem => <TableRow key={elem.id} symbol={elem.symbol} price={elem.priceUsd} marketCap={elem.marketCapUsd} change={elem.changePercent24Hr}/>)}
			</tbody>
		</table>
		<Pagination setPage={setPage} page={page}/>
		</>
	)
}

export default CryptTable;