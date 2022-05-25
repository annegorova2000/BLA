drop table if exists drone_delivery.drones cascade;

create table if not exists drone_delivery.drones (
    id bigint not null primary key,
    drone_type int not null references drone_types (id) on delete restrict,
    status_code int not null references drone_status_codes (code) on delete restrict
);