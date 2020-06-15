const router = require('express').Router()
const bcrypt = require('bcryptjs')

const Users = require('./user-model')

router.post('/register', (req, res) => {
    const { username, password } = req.body

    const rounds = process.env.HASH_ROUNDS || 8
    const hash = bcrypt.hashSync(password, rounds)

    Users.add({ username, password: hash })
        .then(user => {
            res.status(201).json(user)
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

module.exports = router