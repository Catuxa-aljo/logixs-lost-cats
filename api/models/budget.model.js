const mongoose = require('mongoose')
const Schema = mongoose.Schema

const budgetSchema = new Schema ({
    initial: {
        type: Number
    },
    travel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Travel',
    },
    spent: [{
        type: Schema.Types.ObjectId,
        ref: 'TravelEvent'
    }],
    
},
{
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = doc.id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;

            return ret
            }
        },
})


/* budgetSchema.virtual('spended', {
    ref: 'TravelEvent',
    localField: '_id',
    foreignField: 'cost',
    justOne: false
}) */

const Budget = mongoose.model('Budget', budgetSchema)
module.exports = Budget