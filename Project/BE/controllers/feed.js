// import express from 'express';
import Feed from '../models/feed.js';

export const getPost = async(req, res) => {
    try{
        const totalFeeds = await Feed.count();
        const feeds = await Feed.findAll();
        res.json({feeds, totalFeeds});
    } catch(error) {
        res.json({error: error.message});
    }
}

export const createPost = async(req, res) => {
    try{
        const {title, content} = req.body;
        
        const feed = await Feed.create({title, content});
        
        res.status(201).json(feed);
    }
    catch(error) {
        res.json({error: error.message});
    }
}

export const getPostById = async (req, res) => {
    try{
        const postId = req.params.postId;
        console.log(postId);
        
        const post = await Feed.findByPk(postId);
        if(!post)
            return res.status(404).json({error: "Post not found"});
        
        res.json(post);
    } catch(err) {
        res.json({error: err});
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
        console.log(post);
        
        // await Feed.save();
        await Feed.update(
            { title, content },
            { where: { id: postId } } 
          );
          
        res.json(post);
    }
    catch(err) {
        res.json({error: err.message});
    }
}


export const deletePost = async(req, res) =>{
    try{
        const postId = req.params.postId;
        const post = await Feed.findByPk(postId);
        if(!post)
            return res.status(404).json({error: 'Post not found'});
        post.destroy();
        res.json({message: "POst deleted successfully"})
    } catch(err) {
        res.json(500).json({error: err.message});
    }
}