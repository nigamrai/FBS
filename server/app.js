import express from 'express';
import router from './routes/user.route';
import errorHandler from './middlewares/error.middleware';
import cors from 'cors';
import { FRONTEND_URL } from './config';
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:FRONTEND_URL,
    credentials:true
}));
app.use("/api/v1/user",router);


app.use(errorHandler);
export default app;