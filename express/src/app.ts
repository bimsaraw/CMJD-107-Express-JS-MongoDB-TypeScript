import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import CategoryRoutes from './routes/CategoryRoutes';
import ProductRoutes from './routes/ProductRoutes';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.use("/api", CategoryRoutes);
app.use("/api", ProductRoutes);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});