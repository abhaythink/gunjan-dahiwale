import ProfilePicture from "../models/profilePicture.js";
import UserProfile from "../models/userProfile.js";

export const uploadPicture = async (req, res) => {
    try {
        const { userId, imageUrl } = req.body;
        const user = await UserProfile.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let profilePic = await ProfilePicture.findOne({ where: { userId } });
        if (profilePic) {
            profilePic.imageUrl = imageUrl;
            await profilePic.save();
            return res.json({ message: "Profile picture updated successfully", profilePic });
        }
        profilePic = await ProfilePicture.create({ userId, imageUrl });
        res.status(201).json({ message: "Profile picture uploaded successfully", profilePic });
    } catch (err) {
        res.json({ error: "Error while uploading image" });
        console.log("Error", err);
    }
}

export const getProfilePicture = async (req, res) => {
    try {
        const { userId } = req.params.id;
        const profilePic = await ProfilePicture.findOne({ where: { userId } });
        if (!profilePic) {
            return res.status(404).json({ message: "Profile picture not found" });
        }
        res.status(201).json(profilePic);
    } catch (error) {
        res.json({error: "Error while fetching profile picture"});
        console.log("Error", error); 
    }
};

export const deleteProfilePicture = async (req, res) => {
    try {
        const { userId } = req.params;
        const profilePic = await ProfilePicture.findOne({ where: { userId } });
        if (!profilePic) {
            return res.status(404).json({ message: "Profile picture not found" });
        }
        await profilePic.destroy();
        res.json({ message: "Profile picture deleted successfully" });
    } catch (error) {
        res.json({error: "Error while deleting image"});
        console.log("Error", err); 
    }
};