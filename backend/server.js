import express from 'express';
import cookieParser from "cookie-parser";
import router from './routes/index.js';

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(router);

app.listen(3000, ()=> console.log('Server running on port 3000'))