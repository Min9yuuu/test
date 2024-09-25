export const logMessage = (level, message, err) => {
  const levels = {
    info: "INFO",
    warn: "WARN",
    error: "ERROR",
  };
  console.log(
    `[${levels[level]}] ${message}${err ? `: ${err.message || err}` : ""}`
  );
};

export const failJson = {
  success: false,
  message: "error",
};

export const responseJson = ({
  message = "test",
  data = {},
  totalCount = 10,
}) => {
  return {
    success: true,
    message,
    data,
    totalCount,
  };
};
