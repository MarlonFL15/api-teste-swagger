create database teste_swagger;

create table blog(
    id bigint auto_increment primary key,
    titulo varchar(50) not null,
    texto text not null,
    datacriacao data not null
);