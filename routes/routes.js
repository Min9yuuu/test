import express from 'express';
import { logMessage, getResponseJson } from '../utils/utils';
import { downloadExcel } from '../controller/attendeesController';
import { getEventsByYear } from '../controller/eventController';

const router = express.Router();

const test1 = async (req, res) => {
  return res.json(getResponseJson({}));
};

// for post
const test2 = async (req, res) => {
  return res.json(getResponseJson({}));
};

// events
router.get('/event', getEventsByYear);
router.post('/event');

// reservation

// attendees
router.get('/download', downloadExcel);

// test
router.get('/test', test1);

export default router;
