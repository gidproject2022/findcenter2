const uuid = require('uuid')
const path = require('path')
const {Event} = require('../models/models')
const ApiError = require('../error/ApiError')

class eventController {
    async create(req, res, next) {
        try {
            let imgarray = [];
            let { title,  description, contacts, typeid } = req.body
            req.files.images.map(
                img => {
                    let fileName = uuid.v4() + '.jpg'
                    img.mv(path.resolve(__dirname, '..', 'static', fileName))
                    imgarray.push(fileName)
                }
            )
            const event = await Event.create({title: title, author_id: req.user.id, description, author_name: req.user.name,  author_last_name: req.user.last_name, images: imgarray, contacts, type_id: typeid})

            return res.json(event)
        } catch (e) {
            console.log(e.stack)
            next(ApiError.badRequest(e.stack))
        }
    }
    async getAll(req, res) {
        let {typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let events;
        if(!typeId) {
            events = await Event.findAndCountAll({limit, offset})
        }
        if(typeId) {
            events = await Event.findAndCountAll({where: {typeId}, limit, offset})
        }
        res.json(events)
    }
    async getOne(req, res) {
        const {id} = req.params
        const event = await Event.findOne(
            {
                where: {id}
            }
        )
        return res.json(event)
    }
}

module.exports = new eventController()