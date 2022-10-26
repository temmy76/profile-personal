<template>
	<!-- make this to center -->
	<div class="d-flex justify-content-center">
		<h1>Home</h1>
		<div v-if="error">{{ error }}</div>
	</div>
	<div class="d-flex justify-content-center" v-if="profiles.length">
		<ProfileList class="profiles" :profiles="profiles" />
	</div>
	<div class="d-flex justify-content-center" v-else>Loading...</div>
</template>

<script>
import ProfileList from "@/components/ProfileList.vue";
import getProfiles from "@/composable/getProfiles";

export default {
	name: "Home",
	components: {
		ProfileList,
	},
	setup() {
		const { profiles, error, loadProfiles } = getProfiles();
		loadProfiles();
		return { profiles, error };
	},
};
</script>

<style>
.profiles {
	width: 800px;
	margin: 0 auto;
}
</style>
