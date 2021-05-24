const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//import routes
const userRoutes = require('./routes/user');

//enviroment variable OR constants
env.config();

//Mongo_bd Connection string
//mongodb+srv://root:<password>@pak-amazon.gvzns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(

    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@pak-amazon.gvzns.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,

    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database is Connected');
});


app.use(bodyParser());
app.use('/api', userRoutes);



// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Hello World from Muhammad Nabeel Amin'
//     });
// });

// app.post('/data', (req, res, next) => {
//     res.status(200).json({
//         message: req.body
//     });
// });

app.listen(process.env.PORT, () => {
    console.log('server is runing on port', (process.env.PORT));
});