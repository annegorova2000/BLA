drop table if exists drone_delivery.pickup_points cascade;

create table if not exists drone_delivery.pickup_points (
    id bigint not null primary key
);