import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Pagination from './components/Pagination/Pagination'
import { useFetching } from './hooks/useFetching';
import CryptService from './services/CryptService';
import { Flex } from 'antd';
import Input from './components/UI/Input/Input';

function App() {

	const [cryptData, setCryptData] = useState<object>([]);
	const [limit, setLimit] = useState<number>(10);
	const [page, setPage] = useState<number>(0);
	const [searchQuery, setSearchQuery] = useState('');

	const [fetchData, isPostLoading, dataError] = useFetching(async () => {
			const responce = await CryptService.getAllData(limit, page, searchQuery);
			setCryptData(responce.data.data);
	})

	const onChangeInputHandler = (e) => {
		setSearchQuery(e.target.value);
	}



	useEffect(() => {
		fetchData();
	}, [page, searchQuery])

  return (
		<>
		<Header/>
			<Input value={searchQuery} onChange={onChangeInputHandler} type="text" placeholder="Search..."></Input>
			<Container searchQuery={searchQuery} setSearchQuery={setSearchQuery} limit={limit} setPage={setPage} 
			page={page} dataError={dataError} isPostLoading={isPostLoading} 
			cryptData={cryptData} setCryptData={setCryptData}/>
		</>
  )
}

export default App
