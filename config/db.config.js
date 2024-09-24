import mariadb from "mariadb";

const configure = {
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "test",
  connectionLimit: 5,
};

// DB 연결을 위한 풀 생성
const pool = mariadb.createPool(configure);

// DB 연결 함수
async function dbConnection() {
  let connection;
  try {
    connection = await pool.getConnection(); // 연결을 가져옵니다.
    console.log("DB connection established successfully!");
    return connection; // 연결 객체를 반환
  } catch (err) {
    console.error("Error connecting to the database: ", err);
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
    console.error("Error executing query: ", err);
    throw err; // 오류 발생 시 오류를 다시 던집니다.
  } finally {
    if (connection) connection.release(); // 연결 해제
  }
}

export { dbConnection, executeQuery }; // 함수를 export
