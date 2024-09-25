import { pool } from './db.config';

// DB 연결 함수
async function dbConnection() {
  let connection;
  try {
    connection = await pool.getConnection(); // 연결을 가져옵니다.
    console.log('DB connection established successfully!');
    return connection; // 연결 객체를 반환
  } catch (err) {
    console.error('Error connecting to the database: ', err);
  }
}

// 쿼리를 실행하는 함수
async function executeQuery(query, params = []) {
  let connection;
  try {
    connection = await pool.getConnection(); // 연결을 가져옵니다.
    const result = await connection.query(query, params); // 쿼리를 실행합니다.
    return result; // 결과 반환
  } catch (err) {
    throw new Error(`Failed to execute query: ${err.message}`);
  } finally {
    if (connection) connection.release(); // 연결 해제
  }
}

// row 길이를 가져옴
async function getTotalCount({ table, whereClause = '', params = [] }) {
  try {
    const query = `SELECT COUNT(*) as count FROM ${table} 
    WHERE status = 1
    ${whereClause !== '' ? 'AND ' + whereClause : ''};`;
    const result = await executeQuery(query, params);

    if (result.length === 0 || !result[0].count) {
      return 0;
    }

    // mariadb는 bigint로 리턴함
    return Number(result[0].count);
  } catch (err) {
    console.error('Query execution failed: ', err);
    throw err;
  }
}

export { dbConnection, executeQuery, getTotalCount };
