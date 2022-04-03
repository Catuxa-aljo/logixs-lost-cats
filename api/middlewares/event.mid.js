const TravelEvent = require('../models/travelEvent.model');
const createError = require('http-errors')

module.exports.exists = (req, res, next) => {  
    const id = req.params.id;
    TravelEvent.findById(id)
        .populate('travel')
        .populate('reviews')
        .then(event => {
            if(event) {
                req.event = event;
                next()
            } else {
                next(createError(404, 'Travel not found'))
            }
        })
        .catch(next)
} 

module.exports.isOwned = (req, res, next) => {
    if(req.event.travel.user == req.user.id) {
        next()
    } else {
        next(createError(403, 'You are not allowed to do that'))
    } 
}