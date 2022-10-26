<template>
	<div class="container">
		<div class="form-group mb-3">
			<label for="username">Username</label>
			<input
				type="text"
				class="form-control"
				id="username"
				v-model="username"
				placeholder="Enter username"
			/>

			<label for="fullname">Fullname</label>
			<input
				type="text"
				class="form-control"
				id="fullname"
				v-model="fullname"
				placeholder="Enter fullname"
			/>

			<label for="bio">Bio</label>
			<textarea
				class="form-control"
				id="bio"
				v-model="bio"
				placeholder="Enter bio"
			></textarea>

			<button type="submit" class="btn btn-primary" @click="editProfile">
				Update
			</button>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			username: "",
			fullname: "",
			bio: "",
			error: undefined,
		};
	},
	created: async function () {
		try {
			const response = await axios.get(
				`http://localhost:3000/api/profiles/see/${this.$route.params.id}`
			);
			let data = response.data.data;
			console.log(data.username);
			this.username = data.username;
			this.fullname = data.fullname;
			this.bio = data.bio;
		} catch (error) {
			this.error = error.message;
		}
	},
	methods: {
		async editProfile() {
			try {
				await axios.put(
					`http://localhost:3000/api/profiles/${this.$route.params.id}`,
					{
						username: this.username,
						fullname: this.fullname,
						bio: this.bio,
					}
				);
				this.$router.push("/");
			} catch (error) {
				this.error = error.message;
			}
		},
	},
};
</script>
