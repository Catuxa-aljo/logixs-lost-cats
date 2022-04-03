const mongoose = require('mongoose');
const Schema = mongoose.Schema

const albumSchema = new Schema ({
    title: {
        type: String   
    },
    pictures : {
        type: []
    },
    travel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Travel',
    }
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc.id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret
            }
        },
})

const Album = mongoose.model('Album', albumSchema)
module.exports = Album