const Travel = require('../models/travel.model')
const TravelEvent = require('../models/travelEvent.model')
const createError = require('http-errors');

module.exports.exists = (req, res, next) => {  
const id = req.params.id;

Travel.findById(id)
    .populate('user')
    .populate({
        path : 'events',
        populate : {
          path : 'reviews'
        }
      })   
    .populate('albums')
    .then(travel => {
        
        if(travel) {
            req.travel = travel;
            next()
        } else {
            next(createError(404, 'Travel not found'))
        }
    })
    .catch(next)
}

module.exports.areOwned = (req, res, next) => {
    const travelCriteria = { user: req.user.id }
    Travel.find(travelCriteria)
        .then(travels => { 
            req.travels = travels;
            next()      
            }
        )
        .catch(next)
}

module.exports.isOwned = (req, res, next) => {   
            if (req.travel.user.id == req.user.id) {
                next()
            } else {
                next(createError(403, 'You can not do that'))
            }            
}