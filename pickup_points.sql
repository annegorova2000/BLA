drop table if exists drone_delivery.pickup_points cascade;

create table if not exists drone_delivery.pickup_points (
    id bigint not null primary key,
    name varchar(40) not null, -- не совсем понимаю зачем постомату имя лол
    address varchar(150) not null unique,
    longitude numeric not null,
    latitude numeric not null,

    constraint pickup_point_geo_point_is_unique unique ( longitude, latitude )
);