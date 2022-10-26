const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const course_data = require('./data/course_data.json')
app.use(cors());
app.get('/courses', (req, res) => {
    res.send(course_data);
})
app.get('/', (req, res) => {
    res.send('My Server is running')
})
app.listen(port, () => {
    console.log(`My Learning Pool server is running on Port ${port}`);
})