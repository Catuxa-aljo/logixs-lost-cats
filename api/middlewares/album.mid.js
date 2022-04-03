const Album = require('../models/album.model');
const createError = require('http-errors');

module.exports.exists = (req, res, next) => {
    const id = req.params.id
    Album.findById(id)
    .populate('travel')
        .then(album => {
            if ( album ) {
                req.album = album;
                next()
            } else {
                next(createError(404, 'Album not found'))
            }
        })
        .catch(next)
}

module.exports.isOwned = (req, res, next) => {
            if(req.album.travel.user == req.user.id) {
                next()
            } else {
                next(createError(403, 'You are not allowed to do that'))
            } 
        
}
