const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const course_data = require('./data/course_data.json')
app.use(cors());
app.get('/', (req, res) => {
    res.send('My Server is running')
})

app.get('/courses', (req, res) => {
    res.send(course_data);
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    const selectedCourse = course_data.find(cd => cd.id === id)
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log(`My Learning Pool server is running on Port ${port}`);
})