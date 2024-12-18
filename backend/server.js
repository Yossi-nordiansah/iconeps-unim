import express from 'express';
import cookieParser from "cookie-parser";
import router from './routes/index.js';
import cors from 'cors'

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(cookieParser());
app.use(express.json());

app.use(router);

app.listen(3000, ()=> console.log('Server running on port 3000'))