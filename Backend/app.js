const dotenv = require('dotenv');
dotenv.config();


const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const {checkConnection} = require('./config/dbConfig');
const { createTable } = require('./utils/dbUtils');


const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Authentication Backend!');
});


// Register route (mounted at /api -> /api/register)
app.use('/api', authRoute);






app.listen(PORT, async () => {
  try{
    console.log(`Server is running on http://localhost:${PORT}`);
    await checkConnection();
    await createTable();
  } catch (error) {
    console.error('Error starting the server:', error);
  }
});

module.exports = app;