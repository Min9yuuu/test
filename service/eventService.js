import { executeQuery, getTotalCount } from '../config/db.query';

export const getEvents = async () => {
  try {
    const result = await executeQuery('SELECT * FROM tb_event;', []);
    return result;
  } catch (err) {
    console.error('Query execution failed: ', err);
    throw err;
  }
};

export const getEventsTotalCount = async () => {
  return await getTotalCount({
    table: 'tb_event',
  });
};
