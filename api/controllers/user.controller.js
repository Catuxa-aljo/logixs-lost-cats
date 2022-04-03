const User = require('../models/user.model');
const createError = require('http-errors');
const passport = require('passport');
const { exists } = require('../models/user.model');

module.exports.create = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                next(createError(400,  'This email has already been registered'))
            } else {
                return User.create({...req.body, avatar: req?.file?.path})
                    .then(user => res.status(201).json(user))
            }
        })
        .catch(next)
}

module.exports.login = (req, res, next) => {
    passport.authenticate('local-auth', (error, user) => {
        console.log('entro')
        if (error) { 
          console.log('entro2')
          next(error);
         
        } else if (!user) {
          console.log('entro3')
          next(createError(400, 'Invalid email or password'))
        } else {
          console.log('entro4')
          req.login(user, error => {
            if (error) next(error)
            else res.json(user)
          })
        }
      })(req, res, next);
}

module.exports.logout = (req,res, next) => {
  req.logout();
  res.status(204).end()
}

module.exports.edit = (req, res, next) => {
   const userEdited = { name, avatar, password } = req.body;
  
   if(req.file) {
    userEdited.avatar = req.file.path
    }
   
    Object.assign(req.user, userEdited)
    req.user.save()
        .then(user => res.status(200).json(user))
        .catch(next) 
  
}

module.exports.detail = (req, res, next) => {
  res.json(req.user)
}

module.exports.profile = (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        next(createError(404, `This user doesn't exists`))
      }
    })
    .catch(next)
    
}



