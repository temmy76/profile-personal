<template>
	<div v-if="error">{{ error }}</div>
	<div v-if="profile" class="profile">
		<h2>{{ profile.fullname }}</h2>
		<h3 class="pre text-muted">@{{ profile.username }}</h3>
		<p>{{ profile.bio }}</p>
	</div>
</template>

<script>
import detailProfile from "@/composable/DetailProfile";

export default {
	props: ["id"],
	setup(props) {
		const { profile, error, loadProfile } = detailProfile(props.id);

		loadProfile();

		return { profile, error };
	},
};
</script>

<style>
.profile {
	max-width: 1200px;
	margin: 0 auto;
}

.profile p {
	color: #444;
	line-height: 1.5em;
	margin-top: 40px;
}

.pre {
	white-space: pre-wrap;
}
</style>
