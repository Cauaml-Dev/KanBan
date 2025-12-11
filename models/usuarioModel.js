const dbConnect = require('../db/dbConnect.js')

// CRUD PARA CADA CLASSE DA TABELA
class Usuario {


    //CREATE
    //==============================================================================
    static async createUsuario(dados){

        const { campo1, campo2, campo3 } = dados //Colocar os atributos da tabela tarefa 
        // debug da função
        console.log('mainModel.js','Usuario.createUsuario()')
        console.log(arguments);


        return await dbConnect.executarQuery(
            'INSERT INTO tabelaTarefa(campo1, campo2, campo3) VALUES (?, ?, ?)',
            [campo1, campo2, campo3]
        )

    }        

    //READ
    //==============================================================================
    static async readAllUsuario(){
        
        // debug da função
        console.log('mainModel.js','Usuario.readAllUsuario');
        console.log(arguments);


        return await dbConnect.executarQuery('SELECT * FROM tabelaTarefa');
    }


    static async readUsuario(filtros = {}){

        // debug da função
        console.log('mainModel.js','Usuario.readUsuario()')
        console.log(arguments);


        const {id_exemplo,campo1,campo2,campo3} = filtros
 
        var query = 'SELECT * FROM tabelaExemplo WHERE '
        query+= 'id_exemplo LIKE ? '
        query+= 'AND campo1 LIKE ? '
        query+= 'AND campo2 LIKE ? '
        query+= 'AND campo3 LIKE ? '
        

        return  await dbConnect.executarQuery(query,[`%${id_exemplo||''}%`, `%${campo1||''}%`,`%${campo2||''}%`,`%${campo3||''}%`])
    }

    static async readUsuario(id){

        // debug da função
        console.log('mainModel.js','Usuario.readUsuario()')
        console.log(arguments);

        return await dbConnect.executarQuery('SELECT * FROM tabelaUsuario where id_usuario = ?',[id]);

    }

    //UPDATE
    //==============================================================================
    static async updateUsuario(id_usuario,dados = {}){
        
        // debug da função
        console.log('mainModel.js','Usuario.updateUsuario()')
        console.log(arguments);

        const {campo1,campo2,campo3} = dados

        const query = 'UPDATE tabelaUsuario SET campo1 = ?, campo2 = ?, campo3 = ? WHERE id_usuario = ?';

        return dbExemplo.executarQuery(query,[campo1,campo2,campo3, id]);
    }

    
    //DELETE
    //==============================================================================
    static async deleteUsuario(id){
        
        // debug da função
        console.log('mainModel.js','Usuario.deleteUsuario()')
        console.log(arguments);

        return await dbConnect.executarQuery('DELETE FROM tabelaTarefa where id_usuario = ?',[id]);
    }


}

module.exports = Usuario;