import express from 'express';
import { logMessage, responseJson } from '../utils/utils';
import { downloadExcel } from '../controller/attendeesController';
import { getEventsByYear } from '../controller/eventController';

const router = express.Router();

const test1 = async (req, res) => {
  return res.json(responseJson({}));
};

// events
router.get('/event', getEventsByYear);

// reservation

// attendees
router.get('/download', downloadExcel);

// test
router.get('/test', test1);

export default router;
