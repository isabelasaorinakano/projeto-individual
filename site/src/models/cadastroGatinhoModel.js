var database = require("../database/config");
//nome, peso, raca, descricao
function listar() {
    console.log("ACESSEI O CADASTRO_GATINHO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            c.id AS idCadastro,
            c.nome,
            c.peso,
            c.raca,
            c.data,
            c.descricao,
            c.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM cadastroGatinho c
            INNER JOIN usuario u
                ON a.fk_usuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O CADASTRO_GATINHO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
    SELECT 
    c.id AS idCadastro,
    c.nome,
    c.peso,
    c.raca,
    c.data,
    c.descricao,
    c.fk_usuario,
    u.id AS idUsuario,
    u.nome,
    u.email,
    u.senha
        FROM cadastroGatinho c
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O CADASTRO_GATINHO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    SELECT 
    SELECT 
    c.id AS idCadastro,
    c.nome,
    c.peso,
    c.raca,
    c.data,
    c.descricao,
    c.fk_usuario,
    u.id AS idUsuario,
    u.nome,
    u.email,
    u.senha
        FROM cadstroGatinho c
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar( nome,raca,peso,data, descricao, idUsuario) {
    console.log("ACESSEI O CADASTRO_GATINHO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", nome,raca,peso,data, descricao, idUsuario);
    console.log("Cheguei na model,  nome,raca,peso,data,descricao,fk_usuario")
    var instrucao = `
        INSERT INTO cadastroGatinho ( nome, raca, peso, data, descricao, fk_usuario) VALUES ('${nome}', '${raca}', '${peso}', '${data}', '${descricao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function adotar(idCadastro) {
    console.log("ACESSEI O CADASTRO_GATINHO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function adotar():", idAviso);
    var instrucao = `
        DELETE FROM cadastroGatinho WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirGatos(){
    var instrucao =  `
        SELECT * FROM cadastroGatinho;
    `
    return database.executar(instrucao);
}


module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    adotar,
    exibirGatos
}
