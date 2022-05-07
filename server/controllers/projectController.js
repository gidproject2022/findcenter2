const uuid = require('uuid')
const path = require('path')
const {Project} = require('../models/models')
const ApiError = require('../error/ApiError')

class projectController {
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
            const project = await Project.create({title: title, author_id: req.user.id, description, author_name: req.user.name,  author_last_name: req.user.last_name, images: imgarray, contacts, type_id: typeid})

            return res.json(project)
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
        let projects;
        if(!typeId) {
            projects = await Project.findAndCountAll({limit, offset})
        }
        if(typeId) {
            projects = await Project.findAndCountAll({where: {typeId}, limit, offset})
        }
        res.json(projects)
    }
    async getOne(req, res) {
        const {id} = req.params
        const project = await Project.findOne(
            {
                where: {id}
            }
        )
        return res.json(project)
    }
}

module.exports = new projectController()