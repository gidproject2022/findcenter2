const Router = require('express')
const router = new Router()
const projectController = require('../controllers/projectController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, projectController.create)
router.get('/', projectController.getAll)
router.get('/:id', projectController.getOne)

module.exports = router