var exibir_qtd_gatosModel = require("../models/exibir_qtd_gatosModel");

function testar(req, res) {
    console.log("ENTRAMOS NO exibir_qtd_gatosContoller");
    res.send("ENTRAMOS NO exibir_qtd_gatos CONTROLLER");
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

// function publicar(req, res) {
//     var nome = req.body.nomeGatoServer;
//     var raca = req.body.racaServer;
//     var peso = req.body.pesoServer;
//     var data = req.body.dataServer;
//     var descricao = req.body.descricaoServer;
//     var idUsuario = req.body.idUsuarioServer;

//     console.log("cheguei aqui na controller");
//     console.log("req", req);
//     console.log("req", res);

//     if (nome == undefined) {
//         res.status(400).send("O nome está indefinido!");
//     } else if (raca == undefined) {
//         res.status(400).send("A raça está indefinida!");
//     } else if (idUsuario == undefined) {
//         res.status(403).send("O id do usuário está indefinido!");
//     }else if(peso == undefined){
//         res.status(403).send("O peso  está indefinido!");
//     }else if(data == undefined){
//         res.status(403).send("A data está indefinida!");
//     }else {
//         cadastroGatinhoModel.publicar(nome, raca, peso, data, descricao, idUsuario)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             )
//             .catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("Houve um erro ao realizar o cadastro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

function exibirGatos(req, res){
    cadastroGatinhoModel.exibirGatos()
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

function exibirQuantidadeGatos(req,res){
    exibir_qtd_gatosModel.exibirQuantidadeGatos()  
    .then(
        function (resultado) {
            res.json(resultado);
            console.log('controller ok');
        }
    )
    .catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao exibir a quantidade de gatos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}


// function deletar(req, res) {
//     var idCadastro = req.params.idAviso;

//     cadastroGatinhoModel.adotar(idCadastro)
//         .then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao adotar o gatinho: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

module.exports = {
    testar,
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    exibirQuantidadeGatos,
    exibirGatos
}