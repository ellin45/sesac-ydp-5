create database data default character set utf8 collate utf8_general_ci;

use data;

create table visitor(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name varchar(10) not null,
comment mediumtext null
);

desc visitor;

select * from visitor;

insert into visitor(id, name, comment) values('1', '홍길동', '내가 왔다');
insert into visitor(id, name, comment) values('2', '이찬혁', '으라차차');
insert into visitor(id, name, comment) values('3', '이수현', '후라이의 꿈');
show databases;

drop database data;

create database data1 character set utf8mb4 collate utf8mb4_unicode_ci;

create table visitor(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name varchar(10) not null,
comment mediumtext null
);

desc visitor;

create user 'user'@'%' identified by '1234';

drop user 'user'@'%';
create user 'user'@'%' identified with mysql_native_password by '1234';


grant all privileges on *.* to 'user'@'%' with grant option;

flush privileges;


show databases;

select * from mysql.user;

