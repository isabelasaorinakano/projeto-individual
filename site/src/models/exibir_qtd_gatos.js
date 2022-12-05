var express = require("express");
var router = express.Router();

var exibir_qtd_gatosController = require("../controllers/exibir_qtd_gatosController");

router.get("/", function (req, res) {
    exibir_qtd_gatosController.testar(req, res);
});

router.get("/listar", function (req, res) {
    exibir_qtd_gatosController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    exibir_qtd_gatosController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    exibir_qtd_gatosControllerr.pesquisarDescricao(req, res);
});

router.get("/exibirGatos", function (req, res){
    exibir_qtd_gatosController.exibirGatos(req, res)
})

router.get("/exibirQuantidadeGatos", function (req, res){
    exibir_qtd_gatosController.exibirQuantidadeGatos(req, res);
    console.log('routes OK')
})


module.exports = router;