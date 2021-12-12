create database if not exists teste_swagger;
use teste_swagger;

create table if not exists blog(
    id bigint auto_increment primary key,
    titulo varchar(50) not null,
    texto text not null,
    datacriacao date not null
);