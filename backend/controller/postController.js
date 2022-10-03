const postDataPath = './data/posts.json';
const express = require('express');
const postRoutes = express.Router();
const fs = require('fs');
// controller for users data

const savePostData = (data) =>{
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(postDataPath, stringifyData);
}

const getPostData = () => {
    const jsonData = fs.readFileSync(postDataPath);
    return JSON.parse(jsonData)
}

// @method: GET

const getPost = async (req, res) => {
    const accounts = getPostData()
    res.send(accounts);
}

const getPostDataById = (id) =>{
    let posts = getPostData();
    let postById = posts.find(x => x.id === posts.id)
    return postById
}

// @method : GET by Id

const getPostById = (req, res) =>{
    let posts = getPostData();
    let post = posts.find(post => post.id == req.params.id)
    res.send(post);
    console.log(post)
}

// @method: POST
const savePost = async (req, res) => {
    // let existAccounts = getPostData();
    // const newAccountId = Math.floor(0 + Math.random() * 0);
    // existAccounts[newAccountId] = req.body;
    // console.log(existAccounts);
    // savePostData(existAccounts);
    let data = getPostData()
    let newData = req.body;
    data.push(newData);
    savePostData(data);
    res.send({
        sucess: true, msg: 'Post added successfully'
    });
}

// @method: PUT
const updatePost = (req, res)=>{
    let existAccounts = getAccountData()
    fs.readFile(postDataPath, 'utf8', (err, data)=>{
        const accountId = req.params['id'];
        existAccounts[accountId] = req.body;
        saveAccouuntData(existAccounts);
        res.send(`Post with id ${accountId} has been updated`)
    }, true)
}

// @method: DELETE
const deletePost = (req, res)=>{
    fs.readFile(postDataPath, 'utf-8', (err, data)=>{
        let existAccounts = getAccountData();
        const id = req.params['id'];
        delete existAccounts(userId);
        saveAccouuntData(existAccounts);
        res.send(`Post with id ${id} has been deleted`)
    }, true)
}


module.exports = {
    getPost,
    getPostById,
    savePost,
    updatePost,
    deletePost
}