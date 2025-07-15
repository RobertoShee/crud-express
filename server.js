// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/task.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

// Rutas
app.use('/api/tasks', taskRoutes);

// Middleware de error
app.use(errorHandler);

// Conexión DB y arranque
connectDB();
app.listen(3000, () => console.log('🟢 Server corriendo en http://localhost:3000'));