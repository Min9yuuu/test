export const logMessage = (level, message, err) => {
  const levels = {
    info: 'INFO',
    warn: 'WARN',
    error: 'ERROR',
  };
  console.log(
    `[${levels[level]}] ${message}${err ? `: ${err.message || err}` : ''}`
  );
};
