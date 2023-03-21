import express from 'express';
import routes from './routes/crmRoutes'

//run express server
const app = express();
const PORT = 3000;

//run routes
routes(app);

app.get('/', (req, res) => {
    res.send(`Node and Express server is running on port ${PORT}`);
});


app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`);
});