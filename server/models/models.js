const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    email: {type: DataTypes.STRING, unique: true, allowNull: false,},
    name: {type: DataTypes.STRING, allowNull: false,},
    last_name: {type: DataTypes.STRING, allowNull: false,},
    age: {type: DataTypes.INTEGER, defaultValue: null,},
    password: {type: DataTypes.STRING, allowNull: false,},
    usertype: {type: DataTypes.STRING, defaultValue: "USER"},
    ava: {type: DataTypes.STRING, defaultValue: 'profile.png'},
    description: {type: DataTypes.TEXT, defaultValue: "Я новый пользователь сервиса FindCenter"},
    skills: {type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: ['sdf', 'sdfsdf', 'dsf']},
})

const Basket = sequelize.define(
    'basket', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    })

const BasketProject = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
})

const BasketEvent = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
})

const Project = sequelize.define('project', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    title: {type: DataTypes.STRING, unique: true, allowNull: false,},
    description: {type: DataTypes.TEXT, allowNull: false,},
    author_id: {type: DataTypes.INTEGER, allowNull: false,},
    author_name: {type: DataTypes.STRING, allowNull: false, },
    author_last_name: {type: DataTypes.STRING, allowNull: false,},
    images: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,},
    contacts: {type: DataTypes.STRING, allowNull: false,},
    type_id: {type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false,},
})

const Event = sequelize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    title: {type: DataTypes.STRING, unique: true,},
    description: {type: DataTypes.STRING, allowNull: false,},
    start_time: {type: DataTypes.STRING, allowNull: false,},
    end_time: {type: DataTypes.STRING, allowNull: false,},
    author_id: {type: DataTypes.INTEGER, allowNull: false,},
    author_name: {type: DataTypes.STRING, allowNull: false,},
    author_last_name: {type: DataTypes.STRING, allowNull: false,},
    images: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,},
    contacts: {type: DataTypes.STRING, allowNull: false,},
    type_id: {type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false,},
})

const Type = sequelize.define('types', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING, unique: true, allowNull: false,},
})

User.hasMany(Project, {
    foreignKey: 'author_id',
})
Project.belongsTo(User)

User.hasMany(Event, {
    foreignKey: 'author_id',
})

User.hasOne(Basket, {
    foreignKey: 'id',
})
Basket.belongsTo(User)

Project.hasMany(BasketProject)
BasketProject.belongsTo(Project)

Event.hasMany(BasketEvent)
BasketEvent.belongsTo(Event)

Basket.hasMany(BasketProject)
BasketProject.belongsTo(Basket)

Basket.hasMany(BasketEvent)
BasketEvent.belongsTo(Basket)

Project.hasMany(Type)
Type.belongsTo(Project)

Event.hasMany(Type)
Type.belongsTo(Event)

module.exports = {
    User,
    Project,
    Event,
    Type,
    Basket,
    BasketEvent,
    BasketProject,
}