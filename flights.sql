drop table if exists drone_delivery.flights cascade;

create table if not exists drone_delivery.flights (
    start_date date not null,
    weather_probability numeric not null check ( weather_probability >= 0),  -- Это кто (who) ?

    drone_id bigint not null references drones (id) on delete restrict,
    client_id varchar(60) not null references clients (id) on delete restrict,
    book_id bigint not null references books (id) on delete restrict,
    pickup_point_id bigint not null references pickup_points (id) on delete restrict--,

--     id varchar(150) generated always as ( concat( -- мб и не надо
--         cast(drone_id as varchar(25)), '_',
--         client_id, '_',
--         cast(book_id as varchar(25)), '_',
--         cast(pickup_point_id as varchar(25))
--     ) ) stored,

--     constraint flight_generated_id primary key (id) -- мб и не надо
);