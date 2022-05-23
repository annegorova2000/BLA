drop table if exists drone_delivery.books cascade;

create table if not exists drone_delivery.books (
    id bigint not null primary key,
    name varchar(150) not null unique,
    author varchar(100) not null,
    weight numeric not null check ( weight > 0 ),
    publish_date date not null,
    price numeric not null check ( price > 0 )
);