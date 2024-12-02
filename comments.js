// Create web server
// Create API
// Create comments
// Create get comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
    const newComment = req.body.comment;
    comments.push(newComment);
    res.json({comment: newComment});
});

app.get('/comments', (req, res) => {
    res.json({comments: comments});
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
