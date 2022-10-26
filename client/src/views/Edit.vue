<template>
	<div class="d-flex justify-content-center">
		<h1>Edit Profile</h1>
	</div>
	<EditProfile />
</template>

<script>
import EditProfile from "@/components/EditProfile.vue";

export default {
	name: "Edit",
	components: {
		EditProfile,
	},
};
</script>
