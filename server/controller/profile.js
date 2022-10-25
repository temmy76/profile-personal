import Profile from "../models/profile.js";

export default {
	hello: (req, res) => {
		res.json({
			mesage: "hello there",
		});
	},
	getAll: async (req, res) => {
		try {
			const profile = await Profile.find();
			res.status(200).json(profile);
		} catch (error) {
			res.status(500).json({
				message: error,
			});
		}
	},
	addProfile: async (req, res) => {
		const profile = new Profile({
			username: req.body.username,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			age: req.body.age,
		});

		try {
			const saveProfile = await profile.save();
			res.status(201).json({
				data: saveProfile,
			});
		} catch (error) {
			res.status(500).json({
				message: error,
			});
		}
	},
	updateProfile: async (req, res) => {
		try {
			const { username, firstname, lastname, age } = req.body;
			const profile = await Profile.findById(req.params.id);
			profile.username = username;
			profile.firstname = firstname;
			profile.lastname = lastname;
			profile.age = age;
			const updateProfile = await profile.save();
			res.status(202).json({
				data: updateProfile,
			});
		} catch (error) {
			res.status(500).json({
				message: error,
			});
		}
	},
	deleteProfile: async (req, res) => {
		try {
			const profile = await Profile.findById(req.params.id);
			await profile.remove();
			res.status(200).json({
				data: profile,
			});
		} catch (error) {
			res.status(500).json({
				message: error,
			});
		}
	},
};
