const express = require('express');
const router = express.Router();
const blogController = require('./controllers/blogController')

router.get('/blogs', blogController.findAll); //ok
router.get('/blog/:blogId', blogController.findById) //ok
router.post('/blog', blogController.insert) //ok
router.put('/blog/:blogId', blogController.update) //ok
router.delete('/blog/:blogId', blogController.deleteById)
router.delete('/blogs', blogController.deleteAll) //ok

module.exports = router;