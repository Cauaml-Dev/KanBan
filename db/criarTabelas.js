// Use este arquivo para criar as tabelas do seu banco.
// O banco deve ser criado manualmente, este script não cria o banco.
// Esse script depende da configuração do arquivo .env

require('dotenv').config();
const { executarQuery } = require('./dbConnect');

async function criarTabelas() {
  try {
    console.log('Criando tabelas...');

    // Este codigo é responsavel por criar uma nova tabela
    // Se for criar uma nova tabela duplique este código e coloque sua tabela
    await executarQuery(`
      CREATE TABLE IF NOT EXISTS usuario(
        id_usuario INT AUTO_INCREMENT PRIMARY KEY,
        Nome_usuario VARCHAR(50),
        Email_usuario VARCHAR(100),
        Cargo_usuario VARCHAR(50)
      );
    `);


    await executarQuery(`
      CREATE TABLE IF NOT EXISTS tarefa(
        id_tarefa INT AUTO_INCREMENT PRIMARY KEY,
        Nome_tarefa VARCHAR(100) NOT NULL,
        Descricao_tarefa VARCHAR(150) NOT NULL,
        Prioridade_tarefa VARCHAR(30) NOT NULL,
        Status_tarefa ENUM('a fazer', 'em andamento', 'concluido') NOT NULL DEFAULT 'a fazer',
        Data_criacao DATE NOT NULL DEFAULT CURDATE(),
        Data_inicio DATE,
        Data_conclusao DATE,
        id_usuario INT NOT NULL,
        CONSTRAINT fk_tarefa_usuario
          FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
      );
    `);

   // Tenha cuidado porque a ordem de criação é importante
   // Se a tabela A possui uma foreing key para a tabela B
   // entao a tabela B deve ser criada antes da tabela A

    console.log('Tabelas criadas/verificadas com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabelas:', err);
  } finally {
    process.exit(); 
  }
}

criarTabelas();