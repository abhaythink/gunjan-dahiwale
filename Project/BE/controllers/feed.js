// import express from 'express';
import Feed from '../models/feed.js';
import UserProfile from '../models/userProfile.js';

export const getPost = async(req, res) => {
    try{
        const feeds = await Feed.findAll();
        const totalFeeds = feeds.length;

        res.json({feeds, totalFeeds});
    } catch(error) {
        res.json({error: error.message});
    }
}

export const createPost = async(req, res) => {
    try{
        const {title, content, userId, image} = req.body;
        const user = await UserProfile.findOne({where: {userId}});
        if(!user)
            return res.status(404).json({message: "This user does not exists"})
        const feed = await Feed.create({title, content, userId, image});    
        res.status(201).json(feed);
    }
    catch(error) {
        res.json({error: "Error while creating post"});
        console.log("Error", error);  
    }   
}

export const getPostById = async (req, res) => {
    try{
        const postId = req.params.postId;
        const post = await Feed.findByPk(postId);
        if(!post)
            return res.status(404).json({error: "Post not found"});
        res.status(201).json(post);
    } catch(err) {
        res.json({error: "Error while fetching post"});
        console.log("Error", err); 
    }
}

export const updatePost = async(req, res) => {
    try{
        const {title, content} = req.body;
        const postId = req.params.postId;
        const post = await Feed.findByPk(postId);  
        if(!post)
            return res.status(404).json({error: 'Post not found'});
        post.title = title;
        post.content = content;
        await Feed.update(
            { title, content },
            { where: { id: postId } } 
          );    
        res.status(201).json(post);
    }
    catch(err) {
        res.json({error: "Error while updating post"});
        console.log("Error", err); 
    }
}


export const deletePost = async(req, res) =>{
    try{
        const postId = req.params.postId;
        const post = await Feed.findByPk(postId);
        if(!post)
            return res.status(404).json({error: 'Post not found'});
        post.destroy();
        res.json({message: "Post deleted successfully"})
    } catch(err) {
        res.json({error: "Error while deleting post"});
        console.log("Error", err); 
    }
}