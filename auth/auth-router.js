const router = require('express').Router()
const bcrypt = require('bcryptjs')

const Users = require('../users/users-model')

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

router.post('/login', (req, res) => {
    const { username, password } = req.body

    Users.findBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.user = { id: user.id, username: user.username }
                res.status(200).json({ message: `${username} is logged in` })
            }
            else {
                res.status(401).json({ message: 'invalid username or password' })
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

module.exports = router