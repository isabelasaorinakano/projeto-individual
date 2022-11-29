var cadastroGatinhoModel = require("../models/cadastroGatinhoModel");

function testar(req, res) {
    console.log("ENTRAMOS NO cadastroGatinhoContoller");
    res.send("ENTRAMOS NO CADASTRO_GATINHO CONTROLLER");
}

function listar(req, res) {
    avisoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os gatinhos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avisoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os gatinhos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    avisoModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os gatinhos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var nome = req.body.nome_gatinho;
    var raca = req.body.raca_gatinho;
    var peso = req.body.peso_gatinho;
    var data = req.body.data_cadastro_gatinho;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;

    console.log("cheguei aqui na controller");
    console.log("req", req);
    console.log("req", res);

    if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (raca == undefined) {
        res.status(400).send("A raça está indefinida!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    }else if(peso == undefined){
        res.status(403).send("O peso  está indefinido!");
    }else if(data == undefined){
        res.status(403).send("A data está indefinida!");
    }else {
        cadastroGatinhoModel.publicar(nome,raca,peso,data, descricao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o cadastro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function deletar(req, res) {
    var idCadastro = req.params.idAviso;

    cadastroGatinhoModel.adotar(idCadastro)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao adotar o gatinho: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    testar,
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    deletar
}