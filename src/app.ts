/**
 * Required modules
 */
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { handleError } from './app/middlewares/errorHandler';
// Routes
import helloRoutes from './app/routes/hello.routes';
import userRoutes from './app/routes/user.routes';

/**
 * ===
 * App
 * ===
 */

// Read environment keys from .env
dotenv.config();

// ExpressJS initialisation
const app = express();

// App global middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// App routes
app.use(helloRoutes);
app.use(userRoutes);

// Define after routes
app.use(handleError); // Custom error handler

export default app;
