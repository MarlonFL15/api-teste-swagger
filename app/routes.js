const express = require('express');
const router = express.Router();
const blogController = require('./controllers/blogController')

router.get('/blogs', blogController.findAll);
router.get('/blog/:blogId', blogController.findById)
router.post('/blog', blogController.insert)
router.put('/blog/:blogId', blogController.update)
router.delete('/blog/:blogId', blogController.deleteById)
router.delete('/blogs', blogController.deleteAll)

module.exports = router;