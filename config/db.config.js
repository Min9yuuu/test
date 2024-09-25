import mariadb from 'mariadb';

const configure = {
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'test',
  connectionLimit: 5,
};

// DB 연결을 위한 풀 생성
const pool = mariadb.createPool(configure);

export { pool };
