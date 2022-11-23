var express = require("express");
var router = express.Router();

var gatoController = require("../controllers/gatoController");

router.get("/", function (req, res) {
    gatoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    gatoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    gatoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    gatoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    gatoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    gatoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    gatoController.deletar(req, res);
});

module.exports = router;