// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('📦 MongoDB conectado');
  } catch (err) {
    console.error('❌ Error en DB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;