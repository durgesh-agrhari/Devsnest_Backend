1)
CREATE USER devs WITH PASSSWORD 'password';

2)
CREATE DATABASE devs_db;

CREATE DATABASE devs_db WITH OWNER devs;

3)
GRANT ALL PRIVILEGES ON DATABASE devs_db TO devs;

4) To switch user and db:
psql -h localhost -U devs devs_db;

5)
CREATE TABLE COMPANY(
id INT PRIMARY KEY NOT NULL,
name TEXT NOT NULL,
age INT NOT NULL,
address VARCHAR(50),
salary DECIMAL
);

6)
CREATE TABLE DEPARTMENT(
id INT PRIMARY KEY NOT NULL,
dept CHAR[15] NOT NULL,
emp_id INT NOT NULL
);

7) Check schems with \dn
CREATE SCHEMA devs_schema;

8)
CREATE TABLE devs_schema.company(
id INT NOT NULL,
name VARCHAR[50] NOT NULL,
age INT,
address varchar[100],
salary DECIMAL(18,2),
PRIMARY KEY(id)
);

9)
DROP SCHEMA devs_schema CASCADE;

10)
INSERT INTO company(id, name, age, address, salary) VALUES (1,'Rick',21, 'LA', 15000);
INSERT INTO company(id, name, age, address, salary) VALUES (2,'Morty', 15, 'NYC', 25000);
INSERT INTO company(id, name, age, address, salary) VALUES (3,'Richard', 35, 'California', 35000);
INSERT INTO company(id, name, age, address, salary) VALUES (4,'Wilson', 22, 'SV', 135000.123);

11)
SELECT COUNT(*) FROM company;

12)
SELECT * FROM company WHERE name LIKE 'Ri%';
SELECT * FROM company WHERE name LIKE 'RI%';
SELECT * FROM company WHERE name ILIKE 'RI%';

13)
SELECT * FROM company WHERE age BETWEEN 15 AND 25;
SELECT * FROM company WHERE age IN(15, 21, 35, 40);

14)
UPDATE company SET salary = 21345.00 WHERE id = 2;

15)
SELECT * FROM company ORDER BY id;

16)
DELETE FROM company WHERE id = 1;


17)
CREATE TABLE customers(
cust_id INT NOT NULL,
cust_name VARCHAR(20) NOT NULL,
PRIMARY KEY(cust_id)
);

CREATE TABLE contacts(
contact_id INT NOT NULL,
cust_id INT,
contact_name VARCHAR(20) NOT NULL, 
phone VARCHAR(15), 
email VARCHAR(20), 
PRIMARY KEY(contact_id),
CONSTRAINT fk_cust 
FOREIGN KEY(cust_id) REFERENCES customers(cust_id)
ON DELETE CASCADE
);


