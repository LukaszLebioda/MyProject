-- https://pg-sql.com/
-- use CREATE TABLE (line 7-12) + INSER INTO (line 19-24)

CREATE DATABASE mypostgres;
--DROP DATABASE mypostgres;

CREATE TABLE cities (
    name VARCHAR(50), -- variable character (string) of 50 chars max,
    country VARCHAR(50), -- string of 50 chars max,
    population INTEGER, -- integer,
    area INTEGER -- integer,
); 
--DROP TABLE person;

-- insert single value:
INSERT INTO cities (name, country, population, area) 
VALUES ('Delhi', 'India', 28125000, 2240),
-- insert multiple values:
INSERT INTO cities (name, country, population, area) 
VALUES 
	('Delhi', 'India', 28125000, 2240),
	('Tokyo', 'Japan', 38505000, 8223),
    ('Shanghai', 'China', 22125000, 4015),
    ('Sao Paulo', 'Brazil', 20935000, 3043);

-- select all tables:
SELECT * FROM cities;
-- select some tables:
SELECT name, country FROM cities;
-- aliases:
SELECT name AS city_name, country AS country_name FROM cities;
-- number calculation: + - * / 
SELECT name, population / area AS density FROM cities;
-- string operators and functions:
SELECT name || ', ' || country AS location FROM cities;
SELECT CONCAT(name, ', ', country) AS location FROM cities;
SELECT LOWER(name), LOWER(country) AS location FROM cities;
SELECT UPPER(CONCAT(name, ', ', country)) AS location FROM cities;
SELECT LENGTH(name) AS cityname_length FROM cities;

-- select with where:
SELECT * FROM cities WHERE area >= 4000;
SELECT name, area FROM cities WHERE area = 8223;
SELECT name, area FROM cities WHERE area BETWEEN 2000 AND 4000;
SELECT name, area FROM cities WHERE name IN ('Delhi', 'Tokyo');
SELECT name, area FROM cities WHERE name NOT IN ('Delhi', 'Tokyo');
-- multiple conditions OR / AND:
SELECT name FROM cities WHERE name != 'Delhi' AND area > 2000;
SELECT name FROM cities WHERE name != 'Delhi' OR area > 2000;
-- calculations:
SELECT name, population / area AS density FROM cities WHERE population / area > 10000;

-- updating records:
UPDATE cities SET population = 39505000 WHERE name = 'Tokyo';
UPDATE cities SET population = population + 1000000 WHERE area > 4000;

-- deleting records:
DELETE FROM cities WHERE name = 'Tokyo';
DELETE FROM cities WHERE area < 3000;
-- deleting all records:
DELETE FROM cities;