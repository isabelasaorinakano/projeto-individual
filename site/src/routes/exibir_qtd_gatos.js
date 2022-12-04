var express = require("express");
var router = express.Router();

var exibir_qtd_gatosContoller = require("../controllers/exibir_qtd_gatosContoller");

router.get("/", function (req, res) {
    exibir_qtd_gatosContoller.testar(req, res);
});

router.get("/listar", function (req, res) {
    exibir_qtd_gatosContoller.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    exibir_qtd_gatosContoller.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    exibir_qtd_gatosContollerr.pesquisarDescricao(req, res);
});



router.get("/exibirGatos", function (req, res){
    exibir_qtd_gatosContoller.exibirGatos(req, res)
})

router.get("/exibirQuantidadeGatos", function (req, res){
    exibir_qtd_gatosContoller.exibirQuantidadeGatos(req, res)
})


module.exports = router;