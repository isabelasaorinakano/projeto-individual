


CREATE DATABASE pickmecat;

USE pickmecat;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);


CREATE TABLE cadastroGatinho(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	raca VARCHAR(50),
	peso FLOAT,
	data DATE,
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);