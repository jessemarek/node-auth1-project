const router = require('express').Router()

const Users = require('./users-model')

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            if (users.length) {
                res.status(200).json(users)
            }
            else {
                res.status(404).json({ message: 'Users not found' })
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

module.exports = router