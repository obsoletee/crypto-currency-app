import axios from "axios";


export default class CryptService {
	static async getAllData(limit: number, offset: number) {
		const response = await axios.get("https://api.coincap.io/v2/assets/?_limit=5", {
			params: {
				limit,
				offset,
			}
		});
		return response;
	}
}