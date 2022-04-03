const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const EMAIL_PATTERN= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_PATTERN= /^.{8,}$/;
const SALT_ROUNDS = 10

const userSchema = new Schema({

        name: {
            type: String,
            required: 'A name is required',
            minlength: [3]
        },

        email: {
            type: String,
            required: 'Email is required',
            unique: true,
            match:[EMAIL_PATTERN, 'Insert a valid email']
        },

        avatar: {
            type: String,
            default: 'https://img.vectorfair.com/STUDIO-CAM/STUDIO%20CAM%20371%20140319%20A/TM_STUDIO%20CAM%20371-74.jpg'
        },

        password: {
            type: String,
            required: 'You need a password',
            match: [PASSWORD_PATTERN, 'Password needs at least 8 chars']
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
    toObject: {
        tranform: (doc, ret) => {
            ret.id = doc.id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;

            return ret
        }
    }
});

userSchema.pre('save', function(next) {
    const user = this;
    if(user.isModified('password')) {
        bcrypt
            .hash(user.password, SALT_ROUNDS)
            .then((hash) => {
                user.password = hash;
                next()
            })
            .catch(next)
    } else {
        next()
    }
})

userSchema.methods.checkPassword = function (checkPassword){
    return bcrypt.compare(checkPassword, this.password)
}


const User = mongoose.model('User', userSchema)
module.exports = User