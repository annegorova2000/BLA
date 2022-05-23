drop table if exists drone_delivery.flights;

create table if not exists drone_delivery.flights (
    date date not null,
    drone_id bigint not null references drones (id),
    client_id varchar(60) not null references clients (id),
    library_id bigint not null references libraries (id),
    pickup_point_id bigint not null references pickup_points (id),

    constraint id primary key (drone_id, library_id, pickup_point_id, client_id)
);