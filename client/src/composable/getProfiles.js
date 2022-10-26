import { ref } from "vue";
import axios from "axios";

const getProfiles = () => {
	const profiles = ref([]);
	const error = ref(null);

	const loadProfiles = async () => {
		try {
			const res = await axios.get("http://localhost:3000/api/profiles");
			profiles.value = res.data.data;
		} catch (err) {
			error.value = err.message;
			console.log(error.value);
		}
	};

	return { profiles, error, loadProfiles };
};

export default getProfiles;
