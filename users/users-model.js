const db = require('../data/db-conn')

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('users').select('id', 'username').orderBy('id')
}

function findById(id) {
    return db('users').where({ id }).first()
}

async function add(user) {
    try {
        const [id] = await db('users').insert(user, 'id')

        return findById(id)
    }
    catch (error) {
        throw error
    }
}