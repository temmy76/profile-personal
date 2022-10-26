<template>
	<div class="profiles">
		<div v-if="profiles.length" class="profile-list">
			<div v-for="profile in profiles" :key="profile._id">
				<div class="containter">
					<div class="card mt-4">
						<div class="card-body">
							<h5 class="card-title">{{ profile.fullname }}</h5>
							<h6 class="card-subtitle mb-2 text-muted">
								@{{ profile.username }}
							</h6>
							<p class="card-text">{{ profile.bio.substring(0, 100) }} ....</p>
							<router-link
								class="card-link btn btn-primary"
								:to="{ name: 'ProfileDetails', params: { id: profile._id } }"
								>See Details</router-link
							>
							<router-link
								class="card-link btn btn-warning"
								:to="{ name: 'EditProfile', params: { id: profile._id } }"
								>Edit</router-link
							>
							<a
								class="card-link btn btn-danger"
								@click="removeProfile(profile._id)"
							>
								Delete
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="d-flex justify-content-center" v-else>
			<h2>No profiles found</h2>
		</div>
	</div>
</template>

<script>
import getAllProfiles from "@/composable/getProfiles";
import deleteProfile from "@/composable/deleteProfile";

export default {
	name: "ProfileList",
	data() {
		return {
			profiles: [],
		};
	},
	created() {
		this.getProfiles();
	},
	methods: {
		async getProfiles() {
			try {
				const data = await getAllProfiles();
				this.profiles = data;
			} catch (error) {
				console.log(error);
			}
		},
		async removeProfile(id) {
			try {
				await deleteProfile(id);
				this.getProfiles();
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style>
.profiles {
	width: 800px;
	margin: 0 auto;
}
</style>
