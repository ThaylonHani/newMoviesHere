import express from 'express';
import { routes } from './routes/index.js';

export const app = express();
routes(app);
