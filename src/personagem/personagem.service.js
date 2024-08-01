const { ObjectId } = require('mongodb')
const { getDatabase } = require('../db/database-connection')

function getCollection(){
    return getDatabase().collection('personagem')
}

function readAll(){
    // Acessamos a lista de personagens. na collection do MongoDB
    return getCollection().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id){
    // Retornar o item na collection usando ID
    return getCollection().findOne({ _id: new ObjectId(id)})
}

function create(){
}

function updateById(){
}

function deleteById(){
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById
}