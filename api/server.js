const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

//Routers
const usersRouter = require('../users/users-router')
const authRouter = require('../auth/auth-router')

//Middleware
server.use(helmet())
server.use(express.json())
server.use(cors())

//Endpoints
server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and running!' })
})

module.exports = server