const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/models')
const path = require('path')
const uuid = require('uuid')

const generateJwt = (id, email, name, last_name, usertype, ava) => {
    return jwt.sign(
        {
            id,
            email,
            name,
            last_name,
            usertype,
            ava,
        },
        process.env.SECRET_KEY,
        {expiresIn: '1d'},
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, name, last_name, usertype, password, age} = req.body
        const {ava} = req.files
        let fileName = uuid.v4() + '.jpg'
        await ava.mv(path.resolve(__dirname, '..', 'avas', fileName))

        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }

        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email: email, name: name, last_name: last_name, age: age, usertype: usertype, password: hashPassword, ava: fileName})
        const basket = await Basket.create({id: user.id})

        const token = generateJwt(user.id, user.email, user.name, user.last_name, user.usertype, user.ava)
        return res.json({token})

    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.internal('Пароли не совпадают'))
        }
        const token = generateJwt(user.id, user.email, user.usertype, user.name, user.last_name, user.ava)
        return res.json({token})
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.usertype, req.user.name, req.user.last_name, req.user.ava)
        return res.json({token})
    }
}

module.exports = new UserController()