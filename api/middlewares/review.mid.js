const Review = require('../models/reviews.models');
const Travel = require('../models/travel.model')
const createError = require('http-errors')

module.exports.exists = (req, res, next) => {
    const id = req.params.id;
    Review.findById(id)
        .populate('event')
        .then(review => {
            if(review) {
                req.review = review;
                next()
            } else {
                next(createError(404, 'Review not found'))
            }
        })
        .catch(next)
}

module.exports.isOwned = (req, res, next) => {

    Travel.findById(req.review.event.travel)
        .populate('user')
        .then(travel => {
            if(travel.user.id == req.user.id) {
                next()
            } else {
                next(createError(403, 'You are not allowed to do that'))
            }
        })
        .catch(next)
    
   
     
}