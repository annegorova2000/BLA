drop table if exists drone_delivery.flights cascade;

create table if not exists drone_delivery.flights (
    date date not null,
    weather_probability numeric not null check ( weather_probability >= 0),

    drone_id bigint not null references drones (id),
    client_id varchar(60) not null references clients (id),
    book_id bigint not null references books (id),
    pickup_point_id bigint not null references pickup_points (id),

    constraint id primary key (drone_id, book_id, pickup_point_id, client_id)
);