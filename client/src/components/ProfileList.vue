<template>
	<div class="profile-list">
		<div v-for="profile in profiles" :key="profile._id">
			<!-- <SingleProfile :profile="profile" /> -->
			<div class="containter">
				<div class="card mt-4">
					<div class="card-body">
						<h5 class="card-title">{{ profile.fullname }}</h5>
						<h6 class="card-subtitle mb-2 text-muted">
							@{{ profile.username }}
						</h6>
						<p class="card-text">{{ profile.bio }}</p>
						<a href="#" class="card-link"></a>
						<router-link
							class="card-link btn btn-primary"
							:to="{ name: 'ProfileDetails', params: { id: profile._id } }"
							>See Details</router-link
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
</template>

<script>
import SingleProfile from "./SingleProfile.vue";
import deleteProfile from "@/composable/deleteProfile";

export default {
	props: ["profiles"],
	setup() {
		const removeProfile = async (id) => {
			await deleteProfile(id);
			window.location.reload();
		};

		return { removeProfile };
	},
};
</script>
