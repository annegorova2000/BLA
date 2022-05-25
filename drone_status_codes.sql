-- Опциональный константый справочник для сохранения места в записях о дронах

drop table if exists drone_delivery.drone_status_codes cascade;

create table if not exists drone_delivery.drone_status_codes (
    code int not null primary key,
    text varchar(100) not null,

    constraint drone_status_code_text_is_unique unique (text)
);