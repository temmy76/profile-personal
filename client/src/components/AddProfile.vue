<template>
	<div v-if="error">{{ error }}</div>
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
			<input
				type="text"
				class="form-control"
				id="bio"
				v-model="bio"
				placeholder="Enter bio"
			/>

			<button type="submit" class="btn btn-primary" @click="saveProfile">
				Submit
			</button>
		</div>
	</div>
</template>

<script>
import createProfile from "@/composable/createProfile";

export default {
	name: "AddProfile",
	data() {
		return {
			username: "",
			fullname: "",
			bio: "",
			error: undefined,
		};
	},
	methods: {
		async saveProfile() {
			try {
				await createProfile({
					username: this.username,
					fullname: this.fullname,
					bio: this.bio,
				});

				this.$router.push({ name: "Home" });
			} catch (error) {
				this.error = error.message;
				console.log(error);
			}
		},
	},
};
</script>

<style>
/* make the button in the form is center */
button {
	display: grid;
	margin: 10px auto;
}
.container {
	margin: 0 auto;
	padding: 30px;
	max-width: 800px;
}
</style>
