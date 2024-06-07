import { useState } from "react";

export const useFetching = (callback: Function) => {
	const [isPostLoading, setIsPostLoading] = useState(false);
	const [error, setError] = useState('');

	const fetching = async () => {
		try {
			setIsPostLoading(true);
			await callback();

		} 
		catch (e) {
			setError(e.message);
		}
		finally {
			setIsPostLoading(false);
		}
	}

	return [fetching, isPostLoading, error];
}