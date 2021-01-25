const express = require("express");
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

const router = express.Router();
router.get('/', homeController.index);
router.get('/login', userController.login);
router.get('/post/add', postController.add);
router.post('/post/add', postController.addAction);


// router.get('/posts/:id', (req, res) => {
//     let id = req.params.id;
//
//     res.send('Id do post: ' + id);
// });
//
// router.get('/sobre', (req, res) => {
//     res.send('pagina Sobre');
// });

module.exports = router;
