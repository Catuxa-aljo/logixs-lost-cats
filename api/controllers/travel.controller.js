const Like = require('../models/like.model');
const Travel = require('../models/travel.model');

module.exports.create = (req, res, next) => {
    const travel = {title, description, participants, startingDate, endDate} = req.body;
    Travel.create ({...travel, user: req.user.id, cover: req?.file?.path})
        .then(travel => res.json(travel))
        .catch(next)
}

module.exports.list = (req, res, next) => {  
        res.json(req.travels)   
}

module.exports.listAll = (req, res, next) => {
    Travel.find()
        .then(travels => res.json(travels))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    res.json(req.travel)
}

module.exports.edit = (req, res, next) => {
    const data = {title, description, participants, startingDate, endDate} = req.body    
    if(req.file) {
        travel.cover = req.file.path
        }

    Object.assign(req.travel, data)
        req.travel.save()
            .then( travel => {
                res.json(travel)
            })
            .catch(next)
}

module.exports.delete = (req, res, next) => {
    Travel.deleteOne({ _id : req.travel.id})
        .then(() => res.status(204).end())
        .catch(next)
}

module.exports.savedTravels = (req, res, next) => {
    Like.find({user: req.user})
        .populate('travel')
        .then(travels => res.json(travels))
        .catch(next)
}

