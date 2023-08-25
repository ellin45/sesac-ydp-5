use sesac;

create table user (
 id varchar(10) not null primary key,
 pw varchar(20) not null,
 name varchar(5) not null,
 gender enum( 'F', 'M', '') default '',
 birthday date not null,
 age int(3) not null default 0
 );
 desc user;
 
 insert into user values('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31','33');
 insert into user values('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', '31');
 insert into user values('power70','qxur8sda', '변사또', 'M', '1984-10-18','53');
 insert into user values('hanjo','jk48fn4','한조', 'M','1984-10-18','39');
 insert into user values('widomaker','38ewifh3','위도우','F','1976-06-27','47');
 insert into user values('dvadva','k3f3ah','송하나','F','2001-06-03','22');
 insert into user values('jungkrat','4ifha7f','정크랫','M','1999-11-11','24');
 
select * from user;

-- 1.
select * from user;
select * from user order by birthday;

-- 2.
select * from user
where gender = 'M' order by name desc;

-- 3.
select id, name, birthday from user where birthday like "199%";

-- 4.
select * from user where birthday like "%-06-%" order by birthday;

-- 5.
select * from user where gender = "M" and birthday like "197%";

-- 6.
select * from user order by age desc limit 3;

-- 7.
select * from user where age <=50 and age >=25;

-- 8.
update user set pw = "12345678" where id = "hong1234";

-- 9.
delete from user where id = "jungkrat";
