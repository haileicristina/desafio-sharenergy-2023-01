import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router } from './routes';


const app = express();

app.use(cors());

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

const { APP_URL, APP_PORT } = process.env;



app.use(router);
app.listen(APP_PORT);
  
console.log(`Página em ${APP_URL}:${APP_PORT}`);
//app.listen(3001);
export default app;