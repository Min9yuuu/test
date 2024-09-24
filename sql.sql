# 이벤트
CREATE TABLE TB_EVENT (
    ev_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    , ev_title VARCHAR(100) NOT NULL
    , ev_location VARCHAR(100) NOT NULL
    , ev_notice TEXT NOT NULL
    , ev_desc TEXT NOT NULL
    , ev_status INT NOT NULL DEFAULT 1
    , ev_year INT NOT NULL
    , ev_startdate DATE NOT NULL
    , ev_enddate DATE NOT NULL
    , ev_regdate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    , ev_moddate DATETIME NULL ON UPDATE CURRENT_TIMESTAMP
    , ev_totalCount INT NOT NULL DEFAULT -1
    , fi_id VARCHAR(100)
);


# 예약관리
CREATE TABLE TB_RESERVATION (
    re_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    , ev_id INT NOT NULL # 외래키
    , re_name VARCHAR(100)
    , re_max int NOT NULL
    , re_reserved INT NOT NULL DEFAULT 0
    , CONSTRAINT fk_reservation_event FOREIGN KEY (ev_id) REFERENCES TB_EVENT(ev_id) -- 외래키 연결
); 


# 예약자
CREATE TABLE TB_ATTENDEES (
    at_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    , ev_id INT NOT NULL # 외래키
    , at_usname VARCHAR(100) NOT NULL
    , at_ph VARCHAR(100) NOT NULL
    , at_email VARCHAR(100) NOT NULL
    , at_regdate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    , at_moddate DATETIME NULL ON UPDATE CURRENT_TIMESTAMP
    , at_status int DEFAULT 1
    , ev_count int NOT NULL
    , CONSTRAINT fk_attendees_event FOREIGN KEY (ev_id) REFERENCES TB_EVENT(ev_id) -- 외래키 연결
);
