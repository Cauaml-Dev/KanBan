const Tarefa = require('../models/tarefaModel');
const Usuario = require('../models/usuarioModel');

// ===============================
// MOSTRA KANBAN
// ===============================
const mostraKanban = async (req, res) => {
    const tarefas = await Tarefa.readAllTarefa();
    const usuarios = await Usuario.readAllUsuario();

    const aFazer = tarefas.filter(t => t.Status_tarefa === 'a fazer');
    const fazendo = tarefas.filter(t => t.Status_tarefa === 'em andamento');
    const concluido = tarefas.filter(t => t.Status_tarefa === 'concluido');

    res.render('quadro', {
        dados: {
            titulo: 'Quadro Kanban',
            aFazer,
            fazendo,
            concluido,
            usuarios
        }
    });
};

// ===============================
// MOSTRA NOVA TAREFA
// ===============================
const mostraNovaTarefa = async (req, res) => {
    const usuarios = await Usuario.readAllUsuario();

    res.render('novaTarefa', {
        dados: {
            titulo: 'Gerenciamento de tarefa',
            usuarios
        }
    });
};

// ===============================
// MOSTRA NOVO USUÁRIO
// ===============================
const mostraNovoUsuario = (req, res) => {
    res.render('novoUsuario', {
        dados: { titulo: 'Cadastro de usuario' }
    });
};

// ===============================
// CRIAR USUÁRIO (POST)
// ===============================
const criarUsuario = async (req, res) => {
    const { nome, email } = req.body;

    if (nome && email) {
        await Usuario.createUsuario({
            Nome_usuario: nome,
            Email_usuario: email
        });
    }

    res.redirect('/novaTarefa');
};

// ===============================
// CRIAR TAREFA
// ===============================
const criarTarefa = async (req, res) => {
    const { titulo, descricao, setor, Id_usuario, prioridade } = req.body;

    await Tarefa.createTarefa({
        Nome_tarefa: titulo,
        Descricao_tarefa: descricao,
        Prioridade_tarefa: prioridade || "baixa",
        Status_tarefa: 'a fazer',
        Data_criacao: new Date(),
        Data_inicio: null,
        Data_conclusao: null,
        Nome_setor: setor,
        Id_usuario: Id_usuario || null
    });

    res.redirect('/kanban');
};

// ===============================
// EDITAR TAREFA
// ===============================
const editarTarefa = async (req, res) => {
    const id = Number(req.params.id);

    // Buscar dados atuais SEMPRE
    const tarefaAtual = (await Tarefa.readTarefa(id))[0];

    // FLUXO 1: Drag & Drop
    if (req.body.Status_tarefa && !req.body.titulo) {
        await Tarefa.updateTarefa(id, {
            Nome_tarefa: tarefaAtual.Nome_tarefa,
            Descricao_tarefa: tarefaAtual.Descricao_tarefa,
            Prioridade_tarefa: tarefaAtual.Prioridade_tarefa,
            Data_conclusao: tarefaAtual.Data_conclusao,
            Nome_setor: tarefaAtual.Nome_setor,
            Id_usuario: tarefaAtual.Id_usuario,
            Status_tarefa: req.body.Status_tarefa
        });

        return res.redirect('/kanban');
    }

    // FLUXO 2: Modal
    const { titulo, descricao, setor, Id_usuario, prioridade, Data_conclusao } = req.body;

    await Tarefa.updateTarefa(id, {
        Nome_tarefa: titulo,
        Descricao_tarefa: descricao,
        Nome_setor: setor,
        Id_usuario: Id_usuario || tarefaAtual.Id_usuario,
        Prioridade_tarefa: prioridade || tarefaAtual.Prioridade_tarefa,
        Data_conclusao: Data_conclusao || tarefaAtual.Data_conclusao,
        Status_tarefa: tarefaAtual.Status_tarefa // mantém o status
    });

    res.redirect('/kanban');
};

// ===============================
// EXCLUIR TAREFA
// ===============================
const excluirTarefa = async (req, res) => {
    const id = Number(req.params.id);

    try {
        await Tarefa.deleteTarefa(id); // precisa existir no seu model
        res.status(200).send("Tarefa excluída com sucesso");
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao excluir tarefa");
    }
};

module.exports = {
    mostraKanban,
    mostraNovaTarefa,
    mostraNovoUsuario,
    criarUsuario,
    criarTarefa,
    editarTarefa,
    excluirTarefa
};
