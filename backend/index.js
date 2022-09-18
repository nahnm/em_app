import express from 'express';
const bodyParser = require('body-parser')
const app = express()
const handler = require('./queries')
const PORT = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


app.get('/api', (request, response) => {
    response.json({
        info: 'Node.js, Express, and SQL api
    })
})
app.get('/employees', handler.getEmployees)
app.get('/employees/:id', handler.getEmployeeById)
app.post('/employees', handler.createEmployee)
app.put('/employees/:id', handler.updateEmployee)
app.delete('/employees/:id', handler.deleteEmployee)


app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
})




app.delete('/exercises/:_id', (req, res) => {

    const exerciseId = req.params._id

    exercise.deleteById(exerciseId)
    .then(deletedCount => {
        if (deletedCount === 1) {
            res.status(204).send();
        } else {
            res.status(500).json({ Error: 'Resource not found' });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ Error: 'Request failed' });
    });

});




app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});


