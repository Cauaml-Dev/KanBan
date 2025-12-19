const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

//importação de rotas
const mainRoutes = require('./routes/mainRoutes'); 

//variáveis de ambiente
require('dotenv').config();


// configurações iniciais
app.set('views', './views');  
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const porta = Number(process.env.PORTA) || 3000


//rotas principais da aplicação
app.use('/',mainRoutes);

// Rota de erro
app.use((req, res) => {
  res.status(404).render('erro404', {
    dados: {
      titulo: 'Rota não encontrada',
      mensagem: 'Página não encontrada'
    }
  });
});


app.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Endereco: http://localhost:'+porta);
});