drop role drone_delivery;

create role drone_delivery with
	NOSUPERUSER
	NOCREATEDB
	NOCREATEROLE
	NOINHERIT
	LOGIN
	NOREPLICATION
	NOBYPASSRLS
	CONNECTION LIMIT 100
	ENCRYPTED PASSWORD '12345';

drop database drone_delivery;

create database drone_delivery with 
	owner = drone_delivery;

\c drone_delivery

drop schema drone_delivery;

create schema drone_delivery;

grant all privileges
    on schema drone_delivery
    to drone_delivery;

grant all privileges 
	on all tables in schema drone_delivery
	to drone_delivery;

grant all privileges
	on database drone_delivery
	to drone_delivery;

\c postgres