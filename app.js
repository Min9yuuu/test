import express from 'express';
import routes from './routes/routes';
import path from 'path';
import dotenv from 'dotenv';
import { dbConnection } from './config/db.query';

const PORT = 8080;

const app = express();
dotenv.config();

(async () => {
  await dbConnection();

  // static pages
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'test.html'));
  });

  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // api entry points
  app.use('/api', routes);

  const handleListening = () =>
    console.log(`SERVER LISTENING ON http://localhost:${PORT}`);

  app.listen(PORT, handleListening);
})();
