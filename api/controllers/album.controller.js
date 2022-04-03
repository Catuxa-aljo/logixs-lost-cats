const Album = require('../models/album.model')

module.exports.create = (req, res, next) => {
    const data = {
        title: req.body.title || req.travel.title
    }

    console.info('req.files', req.files)

    Album.create ({
            ...data, 
            travel: req.params.id,
            pictures: req.files?.map(picture => picture.path)
        }) 
        .then(album => res.json(album))
        .catch(next)

}

module.exports.detail = (req, res, next) => {
    res.json(req.album)
}

module.exports.delete = (req, res, next) => {
    Album.findOneAndDelete({_id: req.album.id})
        .then(() => res.status(204).end())
        .catch(next)
}