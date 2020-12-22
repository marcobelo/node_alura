const moment = require('moment')
const connection = require('../infrastructure/connection')


class Atendimento {
    adiciona(atendimento, response) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length >= 5
        const validacoes = [
            { nome: 'data', mensagem: 'Data deve ser maior ou igual a data atual', valido: dataEhValida },
            { nome: 'cliente', mensagem: 'Nome do cliente deve ter ao menos 5 caracteres', valido: clienteEhValido }
        ]
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            response.status(400).json(erros)
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data }
            const sql = 'INSERT INTO Atendimentos SET ?'

            connection.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    response.status(400).json(erro);
                } else {
                    response.status(201).json(resultados);
                }
            })
        }

    }
}

module.exports = new Atendimento