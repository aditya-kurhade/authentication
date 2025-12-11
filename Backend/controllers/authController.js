const bcrypt = require('bcrypt');
const { pool } = require('../config/dbConfig');

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const selectQuery = 'SELECT * FROM users WHERE username = ?';
        const [rows] = await pool.query(selectQuery, [username]);

        if (!rows || rows.length === 0) {
            const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
            const [result] = await pool.query(insertQuery, [username, hashedPassword]);
            const newUserId = result.insertId;
            return res.status(201).json({ message: 'User registered successfully', userId: newUserId });
        } else {
            return res.status(400).json({ message: 'User already exists' });
        }
    } catch (error) {
        console.error('Error in registerUser:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const selectQuery = 'SELECT * FROM users WHERE username = ?';
        const [rows] = await pool.query(selectQuery, [username]);
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        return res.status(200).json({ message: 'Login successful', userId: user.id });
    } catch (error) {
        console.error('Error in loginUser:', error);
        return res.status(400).json({ message: 'Internal server error' });
    }
};

module.exports = { registerUser, loginUser };