drop table if exists drone_delivery.drones cascade;

create table if not exists drone_delivery.drones (
    id bigint not null primary key
);