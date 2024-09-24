import express from "express";
import excelController from "./controller/excelController";
import path from "path";
import { dbConnection, executeQuery } from "./config/db.config"; // DB 연결 및 쿼리 실행 함수 임포트

const app = express();
const PORT = 8080;

// dbConnection();

// app.use(express.static(path.join(__dirname, "public")));
// app.use("/", excelController);

// const handleListening = () =>
//   console.log(`SERVER LISTENING ON http://localhost:${PORT}`);

// app.listen(PORT, handleListening);

(async () => {
  await dbConnection(); // DB 연결을 기다립니다.

  // 간단한 쿼리 실행 예제
  try {
    const result = await executeQuery("SELECT * FROM tb_event;"); // your_table_name에 적절한 테이블 이름을 사용하세요.
    console.log("Query Result: ", result); // 쿼리 결과를 콘솔에 출력합니다.
  } catch (err) {
    console.error("Query execution failed: ", err);
  }

  app.use(express.static(path.join(__dirname, "public")));
  app.use("/", excelController);

  const handleListening = () =>
    console.log(`SERVER LISTENING ON http://localhost:${PORT}`);

  app.listen(PORT, handleListening);
})();
