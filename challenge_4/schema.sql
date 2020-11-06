CREATE DATABASE connectFour;

DROP DATABASE IF EXISTS ConnectFour;

DROP TABLE IF EXISTS gameScore;

CREATE TABLE gameScore (
  player VARCHAR(20),
  score INT
)
