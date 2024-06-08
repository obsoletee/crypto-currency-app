import React, { FC } from "react";
import styles from "./Pagination.module.scss";
import Button from "../UI/Button/Button";

interface PaginationProps {
	page: number;
	setPage: Function;
	limit: number;
}

const Pagination: FC<PaginationProps> = ({limit, page, setPage}) => {

	const previousPage = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault;
		page === 0 
		? setPage(0)
		: setPage(page -= limit);
		}
	

	const nextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault;
		page === 2000
		? setPage(2000)
		: setPage(page += limit);
	}

	return (
		<div className={styles.container}>
			<Button onClick={previousPage}>Previous</Button>
			<div className={styles.pageNumber}>Page: {(page/10)+1}</div>
			<Button onClick={nextPage}>Next</Button>
		</div>
	)
}

export default Pagination;