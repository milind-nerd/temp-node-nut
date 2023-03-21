import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-Parser'
import routes from './routes/crmRoutes.js'

//run express server
const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CROMdb',{
    useNewUrlParser: true
}
);

//bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//run routes
routes(app);


app.get('/', (req, res) => {
    res.send(`Node and Express server is running on port ${PORT}`);
});
app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`);
});