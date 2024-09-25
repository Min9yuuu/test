import xlsx from 'xlsx';
import fs from 'fs/promises';

// 2차원 배열 사용 시
// export const generateExcelFile = async (filePath) => {
//   // 2차원 배열
//   const data = [
//     ['ID', 'Name', 'Age'],
//     [1, 'John Doe', 25],
//     [2, 'Jane Smith', 30],
//   ];

//   // 워크시트 생성
//   const ws = xlsx.utils.aoa_to_sheet(data);

//   // 워크북 생성 및 워크시트 추가
//   const wb = xlsx.utils.book_new();
//   xlsx.utils.book_append_sheet(wb, ws);

//   // 파일로 저장
//   xlsx.writeFile(wb, filePath);
// };

// JSON 사용 시
export const generateExcelFile = async (filePath) => {
  // 객체 배열 형태의 데이터
  const data = [
    { ID: 1, Name: 'John Doe', Age: 25 },
    { ID: 2, Name: 'Jane Smith', Age: 30 },
  ];

  // json 데이터를 워크시트로 변환
  const ws = xlsx.utils.json_to_sheet(data);

  // 워크북 생성 및 워크시트 추가
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws);

  // 파일로 저장
  xlsx.writeFile(wb, filePath);
};

// ---------------------------------

export const downloadAndDeleteFile = async (filePath, fileName, res) => {
  console.log('fileName', fileName);
  try {
    // 파일 다운로드 후 프로젝트에 생성된 파일 삭제
    await new Promise((resolve, reject) => {
      res.download(filePath, `${fileName}`, (err) => {
        if (err) {
          reject(new Error('File not found'));
        } else {
          resolve();
        }
      });
    });

    // 파일 삭제
    await fs.unlink(filePath);
  } catch (err) {
    logMessage('error', 'Failed to download or delete file', err);
    throw err; // 에러를 다시 던져서 상위에서 처리하도록
  }
};
