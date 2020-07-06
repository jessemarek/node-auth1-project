const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')
const sessionConfig = require('../session-config')

const server = express()

//Routers
const requiresAuth = require('../auth/requires-auth')
const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router')

//Middleware
server.use(helmet())
server.use(express.json())
server.use(cors())
server.use(session(sessionConfig))


//Endpoints
server.use('/api', authRouter)
server.use('/api/users', requiresAuth, usersRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and running!' })
})

module.exports = server