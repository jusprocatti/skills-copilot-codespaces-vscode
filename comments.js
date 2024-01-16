// Create web server application with Node.js

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');    

// Get all comments

router.get('/', commentsController.getAllComments);     

// Get comment by id

router.get('/:id', commentsController.getCommentById);

// Create comment

router.post('/', commentsController.createComment);

// Update comment

router.put('/:id', commentsController.updateComment);