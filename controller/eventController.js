import { getEvents, getEventsTotalCount } from '../service/eventService';
import { responseJson } from '../utils/utils';

export const getEventsByYear = async (req, res) => {
  try {
    const data = await getEvents();
    const totalCount = await getEventsTotalCount();
    const result = responseJson({ data, totalCount });

    return res.json(result);
  } catch (err) {
    console.error('Failed to get events by year: ', err);
    return res
      .status(500)
      .json(responseJson({ message: 'Internal Server Error' }));
  }
};
