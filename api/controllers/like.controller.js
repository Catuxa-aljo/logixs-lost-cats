const createError = require('http-errors')
const Like = require('../models/like.model')

module.exports.like = (req, res, next) => {
    const likeCrititeria = { user: req.user.id, travel: req.travel.id }
    Like.findOne(likeCrititeria)
        .then(like => {
            if (!like) {
                Like.create(likeCrititeria)
                    .then(like => res.status(201).json(like))
                    .catch(next)
            } else {
                like.delete()
                    .then(() => res.status(204).end())
                    .catch(next)
            }
        })
        .catch(next)
}