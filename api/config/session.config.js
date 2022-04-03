const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const session = require('express-session')
const User = require('../models/user.model')

const sessionMaxAge = Number(process.env.SESSION_MAX_AGE || 7)

module.exports.sessionConfig = session({
    secret: process.env.SESSION_SECRET || "super secret (change it)",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.SESSION_SECURE === 'true',
        maxAge: 24 * 3600 * 1000 * sessionMaxAge
    }, 
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/go',
        ttl: 24 * 3600 * 1000 * sessionMaxAge
    })

}) 
