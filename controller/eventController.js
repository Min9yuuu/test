import { getEvents, getEventsTotalCount } from '../service/eventService';
import { getResponseJson } from '../utils/utils';

export const getEventsByYear = async (req, res) => {
  try {
    const data = await getEvents();
    const totalCount = await getEventsTotalCount();
    const result = getResponseJson({ data, totalCount });

    return res.json(result);
  } catch (err) {
    console.error('Failed to get events by year: ', err);
    return res
      .status(500)
      .json(getResponseJson({ message: 'Internal Server Error' }));
  }
};
