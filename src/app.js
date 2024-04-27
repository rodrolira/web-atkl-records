import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import artistsRoutes from './routes/artists.routes.js';
import releasesRoutes from './routes/releases.routes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());


app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use('/api', artistsRoutes);
app.use('/api', releasesRoutes);

export default app
