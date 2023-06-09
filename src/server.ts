import app from './app';
import logger from './config/logger';

// Load PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`🚀 Server is running on ${PORT}`);
});

export default app;
