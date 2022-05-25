drop table if exists drone_delivery.clients cascade;

create table if not exists drone_delivery.clients (
    id varchar(60) not null primary key,
    name varchar(150) not null,
    phone_number varchar(20) not null unique,
    address varchar(150) not null,
    longitude numeric not null,
    latitude numeric not null
);