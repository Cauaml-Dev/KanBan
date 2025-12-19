const dbConnect = require('../db/dbConnect.js');

class Tarefa {

    // CREATE
    // ==============================================================================
    static async createTarefa(dados) {
        console.log('tarefaModel.js', 'Tarefa.createTarefa()');

        const {
            Nome_tarefa,
            Status_tarefa,
            Descricao_tarefa,
            Prioridade_tarefa,
            Data_criacao,
            Data_inicio,
            Data_conclusao,
            Nome_setor,
            Id_usuario
        } = dados;

        const query = `
            INSERT INTO tarefa
            (Nome_tarefa, Status_tarefa, Descricao_tarefa, Prioridade_tarefa, 
             Data_criacao, Data_inicio, Data_conclusao, Nome_setor, Id_usuario)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        return await dbConnect.executarQuery(query, [
            Nome_tarefa,
            Status_tarefa,
            Descricao_tarefa,
            Prioridade_tarefa,
            Data_criacao,
            Data_inicio || null,
            Data_conclusao || null,
            Nome_setor,
            Id_usuario || null
        ]);
    }

    // READ ALL
    // ==============================================================================
    static async readAllTarefa() {
        console.log('tarefaModel.js', 'Tarefa.readAllTarefa()');

        const query = `
            SELECT 
                id_tarefa,
                Nome_tarefa,
                Descricao_tarefa,
                Nome_setor,
                Id_usuario,
                Prioridade_tarefa,
                Data_criacao,
                Data_conclusao,
                Status_tarefa
            FROM tarefa
        `;

        return await dbConnect.executarQuery(query);
    }

    // READ BY ID
    // ==============================================================================
    static async readTarefa(id_tarefa) {
        console.log('tarefaModel.js', 'Tarefa.readTarefa()');

        const query = `
            SELECT 
                id_tarefa,
                Nome_tarefa,
                Descricao_tarefa,
                Nome_setor,
                Id_usuario,
                Prioridade_tarefa,
                Data_criacao,
                Data_conclusao,
                Status_tarefa
            FROM tarefa
            WHERE id_tarefa = ?
        `;

        return await dbConnect.executarQuery(query, [id_tarefa]);
    }

    // UPDATE
    // ==============================================================================
    static async updateTarefa(id_tarefa, dados) {
        console.log('tarefaModel.js', 'Tarefa.updateTarefa()');

        const {
            Nome_tarefa,
            Descricao_tarefa,
            Prioridade_tarefa,
            Data_conclusao,
            Nome_setor,
            Id_usuario,
            Status_tarefa
        } = dados;

        const query = `
            UPDATE tarefa
            SET Nome_tarefa = ?,
                Descricao_tarefa = ?,
                Prioridade_tarefa = ?,
                Data_conclusao = ?,
                Nome_setor = ?,
                Id_usuario = ?,
                Status_tarefa = ?
            WHERE id_tarefa = ?
        `;

        return await dbConnect.executarQuery(query, [
            Nome_tarefa,
            Descricao_tarefa,
            Prioridade_tarefa,
            Data_conclusao || null,
            Nome_setor,
            Id_usuario || null,
            Status_tarefa,
            id_tarefa
        ]);
    }

    // DELETE
    // ==============================================================================
    static async deleteTarefa(id_tarefa) {
        console.log('tarefaModel.js', 'Tarefa.deleteTarefa()');

        const query = 'DELETE FROM tarefa WHERE id_tarefa = ?';
        return await dbConnect.executarQuery(query, [id_tarefa]);
    }
}

module.exports = Tarefa;
