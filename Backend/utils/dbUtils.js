const {pool} = require('../config/dbConfig');

const createTable = async () => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) UNIQUE,   
                password VARCHAR(255) NOT NULL
            )`
        );
        console.log('Users table ensured');
    } catch (error) {
        console.error('Error creating users table:', error );
    }
}

module.exports = {
    createTable
};
