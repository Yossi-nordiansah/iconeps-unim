import express from 'express';
import cookieParser from "cookie-parser";
import router from './routes/index.js';
import cors from 'cors'

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }))
app.use(cookieParser());
app.use(express.json());

app.use(router);

app.listen(5000, ()=> console.log('Server running on port 5000'))