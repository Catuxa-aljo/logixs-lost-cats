const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reviewSchema = new Schema ({
  
    comments: {
        type: String
    },
    stars: {
        type: Number
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TravelEvent',
    },
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

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review