const dbConnect = require('../db/dbConnect.js')

// CRUD PARA CADA CLASSE DA TABELA
class Tarefa {


    //CREATE
    //==============================================================================
    static async createTarefa(dados){

        const { Nome_tarefa, Descricao_tarefa, Prioridade_tarefa, Status_tarefa, Data_criacao, Data_inicio, Data_conclusao} = dados //Colocar os atributos da tabela tarefa nn precisa do id
        // debug da função
        console.log('mainModel.js','Tarefa.createTarefa()')
        console.log(arguments);


        return await dbConnect.executarQuery(
            'INSERT INTO tabelaTarefa(Nome_tarefa, Descricao_tarefa, Prioridade_tarefa, Status_tarefa, Data_criacao, Data_inicio, Data_conclusao) VALUES (?, ?, ?, ?, ?, ?, ?)', //nn precisa do id
            [Nome_tarefa, Descricao_tarefa, Prioridade_tarefa, Status_tarefa, Data_criacao, Data_inicio, Data_conclusao]
        )

    }        

    //READ
    //==============================================================================
    static async readAllTarefa(){
        
        // debug da função
        console.log('mainModel.js','Tarefa.readAllTarefa');
        console.log(arguments);


        return await dbConnect.executarQuery('SELECT * FROM tabelaTarefa');
    }


    static async readTarefa(filtros = {}){

        // debug da função
        console.log('mainModel.js','Tarefa.readTarefa()')
        console.log(arguments);


        const {id_exemplo,campo1,campo2,campo3} = filtros
 
        var query = 'SELECT * FROM tabelaExemplo WHERE '
        query+= 'id_tarefa LIKE ? '
        query+= 'AND Nome_tarefa LIKE ? '
        query+= 'AND Descricao_tarefa LIKE ? '
        query+= 'AND Prioridade_tarefa LIKE ? '
        query+= 'AND Status_tarefa LIKE ? '
        query+= 'AND Data_criacao LIKE ? '
        query+= 'AND Data_inicio LIKE ? '
        query+= 'AND Data_conclusao LIKE ? '
        

        return  await dbConnect.executarQuery(query,[`%${id_tarefa||''}%`, `%${campo1||''}%`,`%${campo2||''}%`,`%${campo3||''}%`])
    }

    static async readTarefa(id){

        // debug da função
        console.log('mainModel.js','Tarefa.readTarefa()')
        console.log(arguments);

        return await dbConnect.executarQuery('SELECT * FROM tabelaTarefa where id_tarefa = ?',[id]);

    }

    //UPDATE
    //==============================================================================
    static async updateTarefa(id_tarefa,dados = {}){
        
        // debug da função
        console.log('mainModel.js','Tarefa.updateTarefa()')
        console.log(arguments);

        const {campo1,campo2,campo3} = dados

        const query = 'UPDATE tabelaTarefa SET campo1 = ?, campo2 = ?, campo3 = ? WHERE id_tarefa = ?';

        return dbConnect.executarQuery(query,[campo1,campo2,campo3, id]);
    }

    
    //DELETE
    //==============================================================================
    static async deleteTarefa(id){
        
        // debug da função
        console.log('mainModel.js','Tarefa.deleteTarefa()')
        console.log(arguments);

        return await dbConnect.executarQuery('DELETE FROM tabelaTarefa where id_tarefa = ?',[id]);
    }


}

module.exports = Tarefa;