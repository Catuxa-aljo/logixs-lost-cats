const mongoose = require('mongoose');
const Schema = mongoose.Schema

const likeSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    travel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Travel'
    }
},
{
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

const Like = mongoose.model('Like', likeSchema)
module.exports = Like