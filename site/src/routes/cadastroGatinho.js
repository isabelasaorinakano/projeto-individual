var express = require("express");
var router = express.Router();

var cadastroGatinhoController = require("../controllers/cadastroGatinhoController");

router.get("/", function (req, res) {
    cadastroGatinhoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    cadastroGatinhoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    cadastroGatinhoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    cadastroGatinhoController.pesquisarDescricao(req, res);
});

router.post("/publicar", function (req, res) {
    cadastroGatinhoController.publicar(req, res);
});

router.get("/exibirGatos", function (req, res){
    cadastroGatinhoController.exibirGatos(req, res)
})

router.delete("/adotar/:idUsuario", function (req, res) {
    cadastroGatinhoController.adotar(req, res);
});

module.exports = router;