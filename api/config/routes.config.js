const express = require('express');
const createError = require('http-errors');

const router = express.Router()
const user = require('../controllers/user.controller')
const travel = require('../controllers/travel.controller')
const event = require('../controllers/travelEvent.controller')
const review = require('../controllers/review.controller')
const album = require('../controllers/album.controller')
const like = require('../controllers/like.controller')
const secure = require('../middlewares/secure.mid')
const travels = require('../middlewares/travel.mid')
const events = require('../middlewares/event.mid')
const reviews = require('../middlewares/review.mid')
const albums = require('../middlewares/album.mid')
const upload = require('./multer.config')

router.post('/', secure.isNotAuthenticated, upload.single('avatar'), user.create)
router.post('/login', secure.isNotAuthenticated, user.login)
router.post('/logout', secure.isAuthenticated, user.logout)
router.get('/me', secure.isAuthenticated, user.detail)
router.patch('/me', secure.isAuthenticated, upload.single('avatar'), user.edit)
router.get('/user/:id', secure.isAuthenticated, user.profile)

router.post('/my-travels', secure.isAuthenticated, upload.single('cover'),  travel.create)
router.get('/my-travels', secure.isAuthenticated, travels.areOwned, travel.list)
router.get('/travels', secure.isAuthenticated, travel.listAll)
router.get('/travels/favourites', secure.isAuthenticated, travel.savedTravels)
router.get('/my-travels/:id', secure.isAuthenticated, travels.exists, travel.detail)
router.patch('/my-travels/:id', secure.isAuthenticated, travels.exists, travels.isOwned, upload.single('cover'), travel.edit)
router.delete('/my-travels/:id', secure.isAuthenticated, travels.exists, travels.isOwned, travel.delete)

router.post('/my-travels/:id', secure.isAuthenticated, travels.exists, event.create)
router.get('/my-travels/events/:id', secure.isAuthenticated, events.exists, event.detail)
router.patch('/my-travels/events/:id', secure.isAuthenticated, events.exists, events.isOwned, event.edit)
router.delete('/my-travels/events/:id', secure.isAuthenticated, events.exists, events.isOwned, event.delete)

router.post('/my-travels/events/:id', secure.isAuthenticated, events.exists, events.isOwned, review.create)
router.get('/my-travels/review/:id', secure.isAuthenticated, reviews.exists, review.detail)
router.delete('/my-travels/review/:id', secure.isAuthenticated, reviews.exists, reviews.isOwned, review.delete)

router.post('/my-travels/:id/album', secure.isAuthenticated, travels.exists, travels.isOwned, upload.array('pictures'), album.create)
router.get('/my-travels/album/:id', secure.isAuthenticated, albums.exists, album.detail)
router.delete('/my-travels/album/:id', secure.isAuthenticated, albums.exists, albums.isOwned, album.delete)

router.post('/travels/:id', secure.isAuthenticated, travels.exists, like.like)

router.use((req, res, next) => next(createError(404, 'Route not found')))

/* router.post('/my-travels/:id/budget', secure.isAuthenticated, travels.exists, budget.create)
router.get('/my-travels/:id/budget', secure.isAuthenticated, travels.exists, budgets.exists, budget.detail)
router.patch('/my-travels/:id/budget', secure.isAuthenticated, travels.exists, budgets.exists, budget.edit) */

module.exports = router