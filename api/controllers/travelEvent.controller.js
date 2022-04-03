const TravelEvent = require('../models/travelEvent.model');
const createError = require('http-errors');
const Travel = require('../models/travel.model');

module.exports.create = (req, res, next) => {
    const travel = {name, category, description, startDate, endDate, price} = req.body;
    
    TravelEvent.create ({...travel, travel: req.params.id})
        .then(travel => {
            res.json(travel)
        })
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    res.json(req.event)
}

module.exports.edit = (req, res, next) => {
    const data = {name, description, event, startDate, endDate, price, location, status} = req.body;
    TravelEvent.findByIdAndUpdate(req.event.id, data)
        .then(event => res.json(event))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    TravelEvent.deleteOne({_id: req.params.id})
        .then(() => res.status(204).end() )
        .catch(next)
}
