const { MongoClient } = require('mongodb')

// Preparamos as informacoes de acesso ao BD
const dbUrl = process.env.DATABASE_URL
const dbName = 'mongodb-arquitetura-mvc'

async function connectToDataBase(){
	  // Realizamos a conexao ao BD
    const client = new MongoClient(dbUrl)
    console.log('Conectando ao banco de dados...')
    await client.connect()
    console.log('Banco de dados conectado com sucesso!')

    const db = client.db(dbName)

		// FIXME: usar o db de alguma forma 
}

module.exports = {
	connectToDataBase
}