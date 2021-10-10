import express, { request, response } from 'express';
import path from 'path'
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);   

app.use('/uploads', express.static(path.resolve(__dirname,'..', 'uploads')));

app.listen(8082, () => {
    console.log("Server started on port 8082 !!"); 
});



