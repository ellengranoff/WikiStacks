const express = require ('express');
const router = express.Router();
const addPage = require('../views/addPage')
router.use(express.json())
const { Page } = require("../models");
const { addPage } = require("../views");

router.get('/', (req, res, next) => {
    res.send('it works!')
})

router.post('/', async (req, res, next) => {
    const {title, content} = req.body;

    try {
        const page = await Page.create({
          title: ???????,
          content: ???????
        });
    
        // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
        res.redirect('/');
      } catch (error) { next(error) }
    console.log(req.body)
    res.send(req.body)
})

router.get('/add', (req, res, next) => {
    res.send(addPage())
})

module.exports = router;