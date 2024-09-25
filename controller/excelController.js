import express from 'express';
import path from 'path';
import {
  downloadAndDeleteFile,
  generateExcelFile,
} from '../service/excelService';
import { logMessage } from '../utils/utils';

const router = express.Router();

router.get('/download', async (req, res) => {
  const filePath = path.join(__dirname, '..', 'temp.xlsx');
  const fileName = '2024-02-01_list.xlsx';

  // 엑셀 파일 생성
  try {
    await generateExcelFile(filePath);
  } catch (err) {
    logMessage('error', 'Failed to generate Excel file', err);
    return res.status(500).send('Failed to generate Excel file');
  }

  // 파일 다운로드 및 삭제 서비스 호출
  try {
    await downloadAndDeleteFile(filePath, fileName, res);
  } catch (err) {
    logMessage('error', 'Failed to generate Excel file or download', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
