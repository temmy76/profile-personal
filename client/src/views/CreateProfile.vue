<template>
	<div class="d-flex justify-content-center">
		<h1>Create Profile</h1>
	</div>
	<AddProfile />
</template>

<script>
import AddProfile from "@/components/AddProfile.vue";

export default {
	name: "CreateProfile",
	components: {
		AddProfile,
	},
};
</script>
