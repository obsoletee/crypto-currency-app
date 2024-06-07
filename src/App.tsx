import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Pagination from './components/Pagination/Pagination'
import { useFetching } from './hooks/useFetching';
import CryptService from './services/CryptService';

function App() {

	const [cryptData, setCryptData] = useState<object>([]);
	const [limit, setLimit] = useState<number>(10);
	const [page, setPage] = useState<number>(0);

	const [fetchData, isPostLoading, dataError] = useFetching(async () => {
		const responce = await CryptService.getAllData(limit, page);
		setCryptData(responce.data.data);
	})

	useEffect(() => {
		fetchData();
	}, [page])

  return (
		<>
		<Header/>
		<Container setPage={setPage} page={page} dataError={dataError} isPostLoading={isPostLoading} cryptData={cryptData}/>
		</>
  )
}

export default App
