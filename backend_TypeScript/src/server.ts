import express, { request, response } from 'express';
import routes from './routes';

const app = express();

app.use(routes);   

app.listen(8082, () => {
    console.log("Server started on port 8082 !!");
});



