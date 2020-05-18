const express = require('express');
const { ApolloServer, gql} = require('apollo-server-express')
//const { readFileSync } = require('fs')
//const typeDefs = require('./schema.graphql')
const resolvers = require('./resolvers')
const models = require('./models');
const expressPlayground = require('graphql-playground-middleware-express').default

const path = require('path')
const mergeGraphqlSchemas = require('merge-graphql-schemas')
const fileLoader = mergeGraphqlSchemas.fileLoader
const typeDefs = fileLoader(path.join(__dirname, '/schema.graphql'))
//const mergeTypes = mergeGraphqlSchemas.mergeTypes

const app = express()
const port = 4000;

/*
async function start() {
    const app = express()
    const MONGO_DB = process.env.DB_HOST

    const client = await MongoClient.connect(
    MONGO_DB,
    { userNewUrlParser: true}
)

const db = client.db()

const context = { db }

async function start(){
    const app = express()
    const MONGO_DB = process.env.DB_HOST

    const client = await MongoClient.connect(
        MONGO_DB,
        { userNewUrlParser: true }
     )

     const db = client.db()

*/
//const serialize = value => new Date(value).toISOString() // 쿼리 타입에 이 타입이 있다면 클라이언트 쪽에서 DateTime 값이 포함된 쿼리를 보내도 된다

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models } // context: async ({ req }) => {
        //const githubToken = req.header.authorization
        //const currentUser = await db.collection('users').findOne({ githubToken })
        // return { db, currentUser }
        // }
        // })
});

server.applyMiddleware({ app });

models.sequelize.authenticate();
models.sequelize.sync();

app.get('/',(req, res) => res.end('Welcome to the API'))
app.get('/playground', expressPlayground({endpoint: '/graphql'}))

app.listen({port}, () =>
    console.log(`GraphQL Server running on ${server.graphqlPath}`)
)
