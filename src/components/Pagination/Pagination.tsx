import React, { FC } from "react";
import styles from "./Pagination.module.scss";
import Button from "../UI/Button/Button";

interface PaginationProps {
	page: number;
	setPage: Function;
	limit: number;
	cryptData: object;
}

const Pagination: FC<PaginationProps> = ({cryptData, limit, page, setPage}) => {

	const previousPage = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault;
		page === 0 
		? setPage(0)
		: setPage(page -= limit);
	}

	const firstPage = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault;
		setPage(0);
	}
	

	const nextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault;
		if (cryptData.length < limit) {
			setPage(page);
		}
		else {
			page === 2000
		? setPage(2000)
		: setPage(page += limit);
		}
	}

	return (
		<div className={styles.container}>
			<Button onClick={firstPage}>First Page</Button>
			<Button onClick={previousPage}>Previous</Button>
			<div className={styles.pageNumber}>Page: {(page/10)+1}</div>
			<Button onClick={nextPage}>Next</Button>
		</div>
	)
}

export default Pagination;