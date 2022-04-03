const Budget = require('../models/budget.model')
const createError = require('http-errors')

module.exports.exists = (req, res, next) => {
Budget.findOne({ travel: req.travel.id})
    .populate('spent')
    .then(budget => {
        if (budget) {
            req.budget = budget
            next()
        } else {
            next(createError(404, 'Budget not found'))
        }
    })
    .catch(next)
}