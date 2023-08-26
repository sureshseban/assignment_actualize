const express = require('express');
const cors = require('cors');

require('./db/config');
const Children = require('./db/Children');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (res, resp) => {
    resp.send('App is working');
});

const connectDB = async () => {
    const childrens = await Children.find();
    console.log(childrens);
}

connectDB();

app.post('/save_children', async (req, resp) => {
    const childrens = req.body.map(item => new Children(item));
    const result = await Children.collection.insertMany(childrens);
    resp.send(result);
});

app.listen(5000, () => {
    console.log('http://localhost:5000/');
})