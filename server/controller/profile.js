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
			res.status(200).json({
        data: profile
      });
		} catch (error) {
			res.status(500).json({
				message: error,
			});
		}
	},
  seeProfile: async(req,res) => {
    const id = req.params.id
    try {
      const profile = await Profile.findById(id)
      if(!profile) {
        res.status(400).json({
          message: "Profile not Found"
        })
        return;
      }
      res.status(200).json({
        data: profile,
      })
    }catch(error) {
      res.status(500).json({
        message: "Server Error " + error,
      })
    }
  },
	addProfile: async (req, res) => {
		const profile = new Profile({
			username: req.body.username,
			fullname: req.body.fullname,
			bio: req.body.bio,
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
			const { username, fullname, bio } = req.body;
			const profile = await Profile.findById(req.params.id);
			profile.username = username;
			profile.fullname = fullname;
			profile.bio = bio;
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
