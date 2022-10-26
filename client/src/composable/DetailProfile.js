import axios from "axios";
import { ref } from "vue";

const detailProfile = (id) => {
	const profile = ref(null);
	const error = ref(null);

	const loadProfile = async () => {
		try {
			const res = await axios.get(
				`http://localhost:3000/api/profiles/see/${id}`
			);
			profile.value = res.data.data;
		} catch (err) {
			error.value = err.message;
			console.log(error.value);
		}
	};
	return { profile, error, loadProfile };
};

export default detailProfile;
