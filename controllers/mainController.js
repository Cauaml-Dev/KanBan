
const mostraPaginaInicial = (req, res) => {

    dados = {
        mensagem:'rota raiz', 
        titulo:'pagina principal',

        // É possível enviar dados diretamente para testes da view sem precisar consultar o banco
        exemplos:[ 
            {
                campo1: 'L1 - Dados 1',
                campo2: 'L1 - Dados 2',
                campo3: 'L1 - Dados 3',
            },
            {
                campo1: 'L2 - Dados 1',
                campo2: 'L2 - Dados 2',
                campo3: 'L2 - Dados 3',
            }            
        ]
    }
    
    res.render('quadro', { dados:dados})

}

const mostraNovaTarefa =   (req,res)=>{   
    
    dados = {
        mensagem:'rota tarefa', 
        titulo:'pagina tarefa',

        // É possível enviar dados diretamente para testes da view sem precisar consultar o banco
        exemplos:[ 
            {
                campo1: 'L1 - Dados 1',
                campo2: 'L1 - Dados 2',
                campo3: 'L1 - Dados 3',
            },
            {
                campo1: 'L2 - Dados 1',
                campo2: 'L2 - Dados 2',
                campo3: 'L2 - Dados 3',
            }            
        ]
    }
    
    res.render('novaTarefa', { dados:dados})
}


const mostraNovoUsuario =   (req,res)=>{    
    dados = {
        mensagem:'rota tarefa', 
        titulo:'pagina tarefa',

        // É possível enviar dados diretamente para testes da view sem precisar consultar o banco
        exemplos:[ 
            {
                campo1: 'L1 - Dados 1',
                campo2: 'L1 - Dados 2',
                campo3: 'L1 - Dados 3',
            },
            {
                campo1: 'L2 - Dados 1',
                campo2: 'L2 - Dados 2',
                campo3: 'L2 - Dados 3',
            }            
        ]
    }
    
    res.render('novoUsuario', { dados:dados})
}



module.exports =  {
    mostraPaginaInicial,
    mostraNovaTarefa,
    mostraNovoUsuario
};