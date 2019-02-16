const path = require('path');
const { randomNumber } = require('../helpers/libs')
const fs = require('fs-extra');
const { Post, Comment, User } = require('../models');

const ctrl = {};



ctrl.index = async (req, res) => {
    const posts = await Post.find().sort({timestamp:-1});
    res.send('hola');//render('index', {posts});
};

ctrl.create = async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({ _id: req.params.user_id })
    if (user) {
        const newPost = new Post({
            user_id: user._id,
            autor: user.username,
            content: req.body.content,
        });
        
        // validaciones de los campos en mappedComment
        
        try{
            await newPost.save();
        } catch(e) {
            console.log(e);
        }
    }
    
/*
    const imgUrl = randomNumber();
    console.log(imgUrl);    
    const imageTempPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();
    const targetPath = path.resolve('src/public/upload/test${ext}');
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg'){
        await fs.rename(imageTempPath, targetPath);
        const newPost = new Post({

        });
        const postSaved = await newPost.save();
    } else{
        await fs.unlink(imageTempPath);
        res.status(500).json({error: 'only images with extension png, jpg and jpeg are allowed'});
    }
    
    res.send('works');
*/
};

ctrl.like = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.post_id })
    if (post) {
        post.likes = post.likes + 1;
        await post.save();
    } else {
        res.status(500).json({ error: 'internal error' });
    }
};

ctrl.comment = async (req, res) => {
    console.log(req.body);
    const post = await Post.findOne({ _id: req.params.post_id })
    if (post) {
        var mComment = {
            post_id: post._id,
            autor: req.body.username,
            content: req.body.content,
        };
        
        try{
            var newComment = new Comment(mComment);
            await newComment.save();
        } catch(e) {
            console.log(e);
        }
    }
    

};

ctrl.remove = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.post_id })
    if (post) {
        await Comment.deleteOne({ post_id: post._id });
        await post.remove();
    }
};

ctrl.index = async (req, res) => {
    const post = await Post.find().sort({ timestamp: -1 })
    if (post) {
        res.json(post);
    }
    else {
        res.json({mensaje:'error al encontrar'});
    }
};

ctrl.profile = async (req, res) => {
    const post = await Post.find({ user_id: req.params.user_id }).sort({ timestamp: -1 })
    if (post) {
        res.json(post);
    }
    else {
        res.json({mensaje:'error al encontrar'});
    }
}

module.exports = ctrl;