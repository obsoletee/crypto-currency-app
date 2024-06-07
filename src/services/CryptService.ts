import axios from "axios";


export default class Cryptservice {
	static async getAllData() {
		const response = await axios.get("https://api.coincap.io/v2/assets");
		return response.data.data;
	}

}