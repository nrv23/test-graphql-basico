'use strict';

const easyGraphqlTester = require('easygraphql-tester');
const fs = require('fs');
const path = require('path');
const resolversMutations = require('./mocks/resolvers/mutation');
const { expect } = require("chai");
const { LIST } = require('./mocks/data');
const apiSchema = fs.readFileSync(
  path.join(__dirname, './../src/schema/', 'schema.graphql'),
  'utf-8'
);



describe('Testing de Resolvers Type Root: Mutation', () => {
  let tester = null;
  before(() => {
    tester = new easyGraphqlTester(apiSchema, resolversMutations);
  }); // cargar solamente una vez antes de correr las pruebas
  afterEach( async() => {

  })
  // probar los resultados de los resolvers se debe hacer de forma asincrona
  it("Comprobar que el resultado del mutation add es correcto", async () => {

    const query = `
      mutation addMutation($value: String!) {

        add(value: $value)
      }
    `;

    await tester.graphql(query, undefined, undefined, { value: "1" });

    const {
      data: {
        add
      }
    } = await tester.graphql(query, undefined, undefined, { value: "2" });

    expect(add).to.be.a('array');
    expect(add).to.have.lengthOf(2);

    expect(typeof add[0]).to.equal('string');


  });

  it("Comprobar que el resultado del mutation removeLast es correcto", async () => {
    const query = `
    mutation removeLastMutation {

      removeLast
    }
  `;

    const {
      data: {
        removeLast
      }
    } = await tester.graphql(query, undefined, undefined, { });

    expect(removeLast).to.be.a('array');
    expect(removeLast.length).to.equal(LIST.length);
    

  });
})