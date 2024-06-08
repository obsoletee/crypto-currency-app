import styles from './CryptTable.module.scss';
import TableRow from '../TableRow/TableRow';
import { FC, useState } from 'react';
import Pagination from '../Pagination/Pagination';

interface CryptTableProps {
	cryptData: object;
	page: number;
	setPage: Function;
	limit: number;
	setCryptData: Function;
}

const CryptTable: FC<CryptTableProps> = ({limit, setCryptData, cryptData, page, setPage}) => {
	
	const [selectedSort, setSelectedSort] = useState();
	const sortData = (e: object) => {
		const currentSort = e.target.id;

		if(e.target.classList.contains('desc')) {
			setCryptData([...cryptData].sort(function(a, b) {return a[currentSort] - b[currentSort];}));
			e.target.classList.add('asc');
			e.target.classList.remove('desc');
		}
		else {
			setCryptData([...cryptData].sort(function(a, b) {return b[currentSort] - a[currentSort];}));
			e.target.classList.remove('asc');
			e.target.classList.add('desc');
		}
		
		
	}

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
      key: 'priceUsd',
			sortType: 'priceUsd',
    },
    {
      title: 'Market Cap (USD)',
      key: 'marketCapUsd',
			sortType: 'marketCapUsd',
    },
    {
      title: '24h Change (%)',
      key: 'changePercent24Hr',
			sortType: 'changePercent24Hr',
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
				{columns.map(elem => <th key={elem.key} id={elem.sortType} onClick={sortData} className={styles.tableHeadCell}>{elem.title}</th>)}
				</tr>
			</thead>
			<tbody className={styles.tableBody}>
				{cryptData.map(elem => <TableRow coinId={elem.id} key={elem.id} symbol={elem.symbol} price={elem.priceUsd} marketCap={elem.marketCapUsd} change={elem.changePercent24Hr}/>)}
			</tbody>
		</table>
		<Pagination limit={limit} setPage={setPage} page={page}/>
		</>
	)
}

export default CryptTable;