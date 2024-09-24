import express from 'express';
import excelController from './controller/excelController';
import path from 'path';

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', excelController);


const handleListening = () =>
  console.log(`SERVER LISTENING ON http://localhost:${PORT}`);

app.listen(PORT, handleListening);
