// import { getEventsList, getEventsTotalCount } from '../service/eventService';
import { EventService } from '../service/eventService';
import { getResponseJson } from '../utils/utils';

export const EventController = {
  getEventsList: async (req, res) => {
    try {
      const data = await EventService.getEventsList();
      const totalCount = await EventService.getEventsTotalCount();
      const result = getResponseJson({ data, totalCount });

      return res.json(result);
    } catch (err) {
      console.error('Failed to get events by year: ', err);
      return res
        .status(500)
        .json(getResponseJson({ message: 'Internal Server Error' }));
    }
  },
  insertEvent: async (req, res) => {
    try {
      const result = getResponseJson({});
      // TODO : reservation 같이 삽입해야함
      EventService.insertEvent(req.body);
      return res.json(result);
    } catch (err) {
      console.error('Failed to insert event: ', err);
      return res
        .status(500)
        .json(getResponseJson({ message: 'Internal Server Error' }));
    }
  },
};
