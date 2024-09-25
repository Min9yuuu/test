import express from 'express';
import { logMessage, getResponseJson } from '../utils/utils';
import { downloadExcel } from '../controller/attendeesController';
import { EventController } from '../controller/eventController';

const router = express.Router();

const test1 = async (req, res) => {
  return res.json(getResponseJson({}));
};

// for post
const test2 = async (req, res) => {
  const result = getResponseJson({});
  console.log('req', req.body);
  console.log('posted', result);
  return res.json(result);
};

const test3 = {
  test: () => {
    console.log('test call');
  },
};

test3.test();

// events
router.get('/event', EventController.getEventsList);
router.post('/event', EventController.insertEvent);
router.put('/event/delete/:id', EventController.deleteEvent);
router.put('/event/edit/:id', EventController.editEvent);

// reservation

// attendees
router.get('/download', downloadExcel);

// test
router.get('/test', test1);

export default router;
