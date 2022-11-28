CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios (
    nome,
    email,
    idade
) VALUES (
    "Márcia Viveiros",
    "marcia@email.com",
    40
);

DELETE FROM usuarios WHERE nome = "Márcia Viveiros"

UPDATE usuarios SET nome = "Beatriz Santos Marques" WHERE nome = "Beatriz Marques"; 