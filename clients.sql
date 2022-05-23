drop table if exists drone_delivery.clients cascade;

create table if not exists drone_delivery.clients (
    id varchar(60) not null primary key,
    name varchar(100) not null,
    phone_number varchar(15) not null unique
);