// src/LoggingMiddleware/logger.js
const LOG_ENDPOINT = 'http://20.244.56.144/evaluation-service/log';

export default async function Log(source, level, module, message) {
  const logEntry = {
    source,
    level,
    module,
    message,
    timestamp: new Date().toISOString(),
  };
  try {
    await fetch(LOG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logEntry),
    });
  } catch (err) {
    // Optionally handle logging errors (e.g., offline)
    // console.error('Logging failed:', err);
  }
}
