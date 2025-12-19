const express = require('express');
const mainController = require('../controllers/mainController.js');
const router = express.Router();

// Página inicial (Kanban)
router.get('/', mainController.mostraKanban);
router.get('/kanban', (req, res) => res.redirect('/')); // /kanban redireciona para a página principal

// Páginas de cadastro
router.get('/novoUsuario', mainController.mostraNovoUsuario);
router.get('/novaTarefa', mainController.mostraNovaTarefa);

// Ações de usuário
router.post('/usuarios', mainController.criarUsuario);

// Ações de tarefa
router.post('/tarefas', mainController.criarTarefa);
router.post('/tarefas/editar/:id', mainController.editarTarefa);
router.post('/tarefas/excluir/:id', mainController.excluirTarefa); 

module.exports = router;
