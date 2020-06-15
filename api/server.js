const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')

const userRouter = require('../users/user-router')

//Middleware
server.use(helmet)
server.use(cors())
server.use(express.json())

//Routers
server.use('/api/users', userRouter)

//Endpoints


server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and running!' })
})

module.exports = server