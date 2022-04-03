const Review = require('../models/reviews.models')

module.exports.create = (req, res, next) => {
    const data = { coments, stars } = req.body
    Review.create({...data, event: req.params.id, })
        .then(review => res.json(review))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    res.json(req.review)
}

module.exports.delete = (req, res, next) => {
    Review.findByIdAndDelete({_id: req.review.id})
        .then(() => res.status(204).end())
}