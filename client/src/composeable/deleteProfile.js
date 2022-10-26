// make function to delete profile
import axios from "axios";
export default async function (id) {
	try {
		await axios.delete(`http://localhost:3000/api/profiles/${id}`);
	} catch (err) {
		console.log(err);
	}
}
