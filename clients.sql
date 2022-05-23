drop table if exists drone_delivery.clients;

create table if not exists drone_delivery.clients (
    id varchar(60) not null primary key
);