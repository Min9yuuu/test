-- 이벤트 테이블에 더미 데이터 삽입
INSERT INTO TB_EVENT 
    (ev_title, ev_location, ev_notice, ev_desc, ev_status, ev_year, ev_startdate, ev_enddate, ev_totalCount, fi_id) 
VALUES
    ('제민천 밤학당', '경기도', '안녕하세요1', '반갑습니다1.', 1, 2024, '2024-03-01', '2024-03-03', 100, 'C:\Users\watar\Desktop\project\test'),
    ('날밤까기', '경기도', '안녕하세요2', '반갑습니다2.', 1, 2024, '2024-05-01', '2024-05-03', 100, 'C:\Users\watar\Desktop\project\test'),
    ('별빛만찬', '경기도', '안녕하세요3', '반갑습니다3.', 1, 2024, '2024-05-12', '2024-05-15', 100, 'C:\Users\watar\Desktop\project\test');


SELECT * FROM TB_EVENT;


-- -- 예약관리 테이블에 더미 데이터 삽입
INSERT INTO TB_RESERVATION 
    (ev_id, re_name, re_max, re_reserved) 
VALUES
    (1, '수업A', 50, 20), 
    (1, '수업B', 50, 80), 
    (2, '밤까기', 100, 50), 
    (3, '별먹기', 100, 10); 


SELECT * FROM TB_RESERVATION;


-- -- 예약자 테이블에 더미 데이터 삽입
INSERT INTO TB_ATTENDEES 
    (re_id, at_usname, at_ph, at_email, ev_count) 
VALUES
    (1, '고지몽', '010-1234-5678', '고지몽@example.com', 10), 
    (1, '김민규', '010-1234-5678', '김민규@example.com', 10), 
    (2, '서지현', '010-1234-5678', '서지현@example.com', 80), 
    (3, '엄마', '010-1234-5678', '엄마@example.com', 50), 
    (4, '아빠', '010-1234-5678', '아빠@example.com', 50); 

    
SELECT * FROM TB_ATTENDEES;




