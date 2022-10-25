
const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'assignement4',
    password: 'root',
    port: 5432,
})

const getUsers = (request, response) => {
    db.query('SELECT * FROM assignement4.users ORDER BY id ASC', (error, results) => {
        if (error) console.log(error);
        response.status(200).json(results.rows)
    })
}
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    db.query('SELECT * FROM assignement4.users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getEmailByName = (request, response) => {
    const name = request.query.name;
    console.log(name);
    db.query('SELECT email FROM assignement4.users WHERE name = $1',[name], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows);
        response.status(200).json(results.rows)
    })
}
const createUser = (request, response) => {
    const id = parseInt(request.body.id)
    const name = request.body.name
    const email = request.body.email
    console.log(request.body)
    db.query('INSERT INTO assignement4.users (id, name, email) VALUES ($1, $2, $3)', [id, name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with: ${JSON.stringify(request.body)}`)
    })
}
const updateUser = (request, response) => {
    const id = parseInt(request.body.id)
    const name = request.body.name
    const email = request.body.email
    console.log(request.body)
    db.query(
        'UPDATE assignement4.users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}
const deleteUser = (request, response) => {
    const id = parseInt(request.body.id)
    db.query('DELETE FROM assignement4.users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}
module.exports = {
    getUsers,
    getUserById,
    getEmailByName,
    createUser,
    updateUser,
    deleteUser,
}