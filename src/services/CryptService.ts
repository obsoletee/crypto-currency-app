import axios from "axios";


export default class CryptService {
	static async getAllData(limit: number, offset: number, search: string) {
		const response = await axios.get("https://api.coincap.io/v2/assets/?_limit=5", {
			params: {
				limit,
				offset,
				search,
			}
		});
		return response;
	}
}