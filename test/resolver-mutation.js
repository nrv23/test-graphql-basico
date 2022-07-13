'use strict';

const easyGraphqlTester = require('easygraphql-tester');
const fs = require('fs');
const path = require('path');
const resolversMutations = require('./mocks/resolvers/mutation');

const apiSchema = fs.readFileSync(
  path.join(__dirname, './../src/schema/', 'schema.graphql'),
  'utf-8'
);

describe('Testing de Resolvers Type Root: Mutation', () => {
  let tester = null;
  before(() => {
    tester = new easyGraphqlTester(apiSchema,resolversMutations);
  }); // cargar solamente una vez antes de correr las pruebas
  
  // probar los resultados de los resolvers se debe hacer de forma asincrona
  it("Comprar que el resultado del mutation add es correcto", async () => {


      
  });
})