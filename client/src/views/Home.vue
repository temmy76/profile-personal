<template>
	<div class="d-flex justify-content-center">
		<h1>Home</h1>
	</div>
	<div class="d-flex justify-content-center">
		<ProfileList />
	</div>
</template>

<script>
import ProfileList from "@/components/ProfileList.vue";

export default {
	name: "Home",
	components: {
		ProfileList,
	},
};
</script>
