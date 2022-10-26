import axios from "axios";

export default async function (profile) {
	try {
		await axios.post("http://localhost:3000/api/profiles", {
			username: profile.username,
			fullname: profile.fullname,
			bio: profile.bio,
		});
		console.log(res);
	} catch (err) {
		console.log(err);
	}
}
