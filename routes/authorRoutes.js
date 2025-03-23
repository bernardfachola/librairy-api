const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const authMiddleware = require('../middleware/authMiddleware');
const authenticateToken = require(`../middleware/authMiddleware`);

router.post('/',authenticateToken, authorController.createAuthor);
router.get('/', authorController.getAuthors);
router.get('/:id', authorController.getAuthor);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;