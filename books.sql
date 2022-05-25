drop table if exists drone_delivery.books cascade;

create table if not exists drone_delivery.books (
    id bigint not null primary key,
    name varchar(150) not null,
    genres varchar(100) not null,   --Можно выносить в будущем в отдельную таблицу
    author varchar(100) not null,   --Можно выносить в будущем в отдельную таблицу
    weight float not null,
    publish_date date not null,
    price int not null,

    constraint book_name_is_unique unique ( name ),
    constraint book_weight_more_than_zero check ( weight > 0 ),
    constraint book_price_more_than_zero check ( price > 0 )
);