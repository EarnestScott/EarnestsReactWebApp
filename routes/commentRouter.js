const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comments = require('../models/Comments');
const commentRouter = express.Router();
commentRouter.use(bodyParser.json());

commentRouter.route('/')
    .get(async (req, res, next) => {
        const results = await Comments.find({});
        res.json(results);
    })
    .post(async (req, res, next) => {
        const obj = await Comments.create(req.body);
        res.json(obj);
    });

module.exports = commentRouter;