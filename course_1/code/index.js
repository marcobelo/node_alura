const customExpress = require('./config/customExpress')
const conexao = require('./infrastructure/connection')
const Tables = require('./infrastructure/tables')

conexao.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('conectado com sucesso ao banco');
        Tables.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na 3000'))
    }
})
