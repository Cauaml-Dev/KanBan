const dbConnect = require('../db/dbConnect.js');

class Usuario {

    // CREATE
    // ==============================================================================
    static async createUsuario(dados) {
        console.log('mainModel.js', 'Usuario.createUsuario()');

        const { Nome_usuario, Email_usuario } = dados;

        const query = `
            INSERT INTO usuario
            (Nome_usuario, Email_usuario)
            VALUES (?, ?)
        `;

        return await dbConnect.executarQuery(query, [
            Nome_usuario,
            Email_usuario
        ]);
    }


    // READ ALL
    // ==============================================================================
    static async readAllUsuario() {
        console.log('mainModel.js', 'Usuario.readAllUsuario()');

        return await dbConnect.executarQuery('SELECT * FROM usuario');
    }


    // READ BY ID
    // ==============================================================================
    static async readUsuario(id_usuario) {
        console.log('mainModel.js', 'Usuario.readUsuario()');

        const query = 'SELECT * FROM usuario WHERE Id_usuario = ?';
        return await dbConnect.executarQuery(query, [id_usuario]);
    }


    // UPDATE
    // ==============================================================================
    static async updateUsuario(id_usuario, dados) {
        console.log('mainModel.js', 'Usuario.updateUsuario()');

        const { Nome_usuario, Email_usuario } = dados;

        const query = `
            UPDATE usuario
            SET Nome_usuario = ?,
                Email_usuario = ?
            WHERE Id_usuario = ?
        `;

        return await dbConnect.executarQuery(query, [
            Nome_usuario,
            Email_usuario,
            id_usuario
        ]);
    }


    // DELETE
    // ==============================================================================
    static async deleteUsuario(id_usuario) {
        console.log('mainModel.js', 'Usuario.deleteUsuario()');

        const query = 'DELETE FROM usuario WHERE Id_usuario = ?';
        return await dbConnect.executarQuery(query, [id_usuario]);
    }
}

module.exports = Usuario;
