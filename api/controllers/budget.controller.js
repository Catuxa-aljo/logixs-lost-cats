const Budget = require('../models/budget.model')
const createError = require('http-errors')

exports.create = (req, res, next) => {
    const data = { initial } = req.body
    Budget.create({...data, travel: req.params.id, spent: req.travel.events})
        .then(budget => res.json(budget))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    Budget.find({ travel: req.travel.id})
    .populate('spent')
    .then(budget => {
        if (budget) {
            res.json(budget)
        } else {
            next(createError(404, 'Budget not found'))
        }
    })
    .catch(next)
}

module.exports.edit = (req, res, next) => {
    
    const data = { initial } = req.body
    Object.assign(req.budget, data)
    
    req.budget.save()
        .then(budget => res.json(budget))
        .catch(next)
}