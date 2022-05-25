-- Константный справочник для сохранения места в записях о дронах

drop table if exists drone_delivery.drone_types cascade;

create table if not exists drone_delivery.drone_types (
    id int not null primary key,
    name varchar(50) not null unique,
    type varchar(30) not null,
    price float not null check ( price > 0 ),
    weight float not null check ( weight > 0 ),
    flight_resource float not null check ( flight_resource > 0 ),
    max_distance float not null check ( max_distance > 0 ),
    vertical_speed float not null check ( vertical_speed > 0 ),
    horizontal_speed float not null check ( horizontal_speed > 0 ),
    flight_time float not null check ( flight_time > 0 ),
    carry_weight float not null check ( carry_weight > 0 ),
    max_acceptable_wind_speed float not null check ( max_acceptable_wind_speed > 0 ),

    -- Все что в данных аккумулятора логично выкинуть в отдельный справочник
    accumulator_battery_type varchar(30) not null,
    accumulator_battery_capacity float not null check ( accumulator_battery_capacity > 0 ),
    accumulator_battery_voltage float not null check ( accumulator_battery_voltage > 0 ),
    accumulator_battery_energy_capacity float not null check ( accumulator_battery_voltage > 0 ),
    accumulator_battery_weight float not null check ( accumulator_battery_weight > 0 ),

    accumulator_battery_count int not null check ( accumulator_battery_count > 1 ),
    -- accumulator_battery_full_weight float not null generated always as ( accumulator_battery_weight * accumulator_battery_count ),
    accumulator_battery_full_weight float not null check ( accumulator_battery_full_weight > 0 ),

    accumulator_battery_discharge_current float not null check ( accumulator_battery_discharge_current > 0 ),
    accumulator_battery_price float not null check ( accumulator_battery_price > 0 ),
    accumulator_battery_cycles int not null check ( accumulator_battery_cycles > 0 )
);