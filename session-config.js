const sessionConfig = {
    name: 'my_cookie',
    secret: process.env.SESSION_SECRET || 'secret goes in here!',
    cookie: {
        maxAge: 1000 * 60 * 10, //10 minutes in ms
        secure: process.env.COOKIE_SECURE || false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false //GDPR compliance
}

module.exports = sessionConfig