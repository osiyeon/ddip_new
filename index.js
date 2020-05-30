const express = require('express');
const { ApolloServer, gql, AuthenticationError, ForbiddenError} = require('apollo-server-express')
const models = require('./models');
const expressPlayground = require('graphql-playground-middleware-express').default

const path = require('path')
const mergeGraphqlSchemas = require('merge-graphql-schemas')
const fileLoader = mergeGraphqlSchemas.fileLoader
const typeDefs = fileLoader(path.join(__dirname, './graphql/**/*.graphql'))
const resolvers = fileLoader(path.join(__dirname, './resolvers/**/*.js'))

const app = express()
const port = 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models }
});

server.applyMiddleware({ app });

models.sequelize.authenticate();
models.sequelize.sync();

app.get('/',(req, res) => res.end('Welcome to the API'))
app.get('/playground', expressPlayground({endpoint: '/graphql'}))

app.listen({port}, () =>
    console.log(`GraphQL Server running on ${server.graphqlPath}`)
)