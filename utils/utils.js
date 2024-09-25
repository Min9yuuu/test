// log
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

export const failJson = {
  success: false,
  message: 'error',
};

export const validateData = (data) => {
  if (typeof data !== 'object') {
    throw new Error('Invalid data type');
  }
  const keys = Object.keys(data);
  keys.forEach((key) => {
    if (data[key] === undefined || data[key] === null) {
      throw new Error(`Invalid value for ${key}`);
    }
  });
  return data;
};

// response json
export const getResponseJson = ({ message = 'success', data, totalCount }) => {
  const response = {
    success: true,
    message,
  };

  if (data != null) {
    response.data = data;
  }

  if (totalCount >= 0) {
    response.totalCount = totalCount;
  }
  return response;
};
