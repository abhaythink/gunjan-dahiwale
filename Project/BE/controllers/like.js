import Feed from "../models/feed.js";
import UserProfile from "../models/userProfile.js";
import Like from "../models/like.js";

export const createLike = async(req, res) => {
    try{
        const {userId, feedId} = req.body;
        const user = await UserProfile.findByPk(userId);
        const feed = await Feed.findByPk(feedId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!feed) {
            return res.status(404).json({ message: "Feed not found" });
        }

        const like = await Like.create({ userId, feedId });
        res.status(201).json({ message: "Like generated successfully", like});

    } catch(err) {
        res.json(err);
    }
}


export const getLikesForFeed = async (req, res) => {
    try {
        const { feedId } = req.params; // Get feedId from request params

        const feed = await Feed.findByPk(feedId, {
            include: { model: UserProfile, as: 'likedByUsers', attributes: ['id', 'name', 'email'] }
        });

        if (!feed) {
            return res.status(404).json({ message: "Feed not found" });
        }

        res.json(feed.likedByUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

