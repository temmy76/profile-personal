import { ref } from "vue";
import axios from "axios";

const getProfiles = async () => {
	const data = ref([]);
	try {
		const res = await axios.get("http://localhost:3000/api/profiles");
		data.value = res.data.data;
	} catch (err) {
		console.log(error.value);
	}

	return data;
};

export default getProfiles;
