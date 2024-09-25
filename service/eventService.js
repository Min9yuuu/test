import { executeQuery, getTotalCount } from '../config/db.query';
import { validateData } from '../utils/utils';

export const EventService = {
  // TODO : 예약 인원 기준 서브쿼리문을 보내줘야함
  getEventsList: async () => {
    const query = `
    SELECT
      ev_id, ev_title, ev_location, ev_notice, 
      ev_desc, status, ev_startdate, ev_enddate, 
      ev_regdate, ev_moddate, ev_totalCount,
      IF(ev_startdate >= NOW(), 1, 0) AS is_end
    FROM tb_event 
        WHERE status = 1
        ORDER BY ev_id DESC
        ;`;
    try {
      const result = await executeQuery(query, []);
      return result;
    } catch (err) {
      console.error('Query execution failed: ', err);
      throw err;
    }
  },
  getEventsTotalCount: async () => {
    return await getTotalCount({
      table: 'tb_event',
    });
  },
  insertEvent: async (data) => {
    console.log('data from insertEvent', data);
    const validatedData = validateData(data);
    const key = Object.keys(validatedData);
    const value = Object.values(validatedData);

    const sql = `
      INSERT INTO tb_event (${key.join(', ')})
      VALUES (${value.map(() => '?').join(', ')});
      `;

    try {
      const result = await executeQuery(sql, value);
      return result;
    } catch (err) {
      console.error('Error inserting event:', err);
      throw err;
    }
  },
};
