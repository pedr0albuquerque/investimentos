//conexao com banco de dados
import Sequelize from 'sequelize'

const sequelize = new Sequelize('nome_banco','user','senha',{
    host: 'localhost',
    dialect: 'mysql'
})

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('Conexão estabelecida com sucesso.')
    } catch (error) {
        console.error('Não foi possível conectar', error)
    }
}

connect()

export { sequelize }