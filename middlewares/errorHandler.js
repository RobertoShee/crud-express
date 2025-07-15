// middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error('🔥 Error:', err.message);
  res.status(500).json({ error: 'Algo salió mal en el servidor' });
};