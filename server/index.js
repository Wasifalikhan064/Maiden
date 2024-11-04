import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

await mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(4000, () => {
  console.log('Server is running on port 4000 !');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});