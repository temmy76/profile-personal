import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import CreateProfile from "../views/Create.vue";
import Edit from "../views/Edit.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/details/:id",
		name: "ProfileDetails",
		component: Details,
		props: true,
	},
	{
		path: "/create-profile",
		name: "CreateProfile",
		component: CreateProfile,
	},
	{
		path: "/edit-profile/:id",
		name: "EditProfile",
		component: Edit,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
