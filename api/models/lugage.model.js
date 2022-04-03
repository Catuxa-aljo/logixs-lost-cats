const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lugageSChema = new Schema ({
    items: {
        type:[]
    },
    travel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Travel',
    },
    
})