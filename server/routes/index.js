const Router = require('express')
const router = new Router()
const projectRouter = require('./projectRouter')
const userRouter = require('./userRouter')
const eventRouter = require('./eventRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/project', projectRouter)
router.use('/event', eventRouter)

module.exports = router