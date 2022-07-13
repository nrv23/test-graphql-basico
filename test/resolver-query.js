'use strict';

const easyGraphqlTester = require('easygraphql-tester');
const fs = require('fs');
const path = require('path');
const { resolverQueries: resolvers } = require('./mocks/resolvers/query');
const  {expect}  = require("chai"); // leer respuestas para poder hacer comparaciones en los tests
const apiSchema = fs.readFileSync(
  path.join(__dirname, './../src/schema/', 'schema.graphql'),
  'utf-8'
);

describe('Testing de Resolvers Type Root: Query', () => {
    let tester = null;
    before(() => {
        // para testear los resolvers se deben cargar en la configuracion del tester junto con el schema
      tester = new easyGraphqlTester(apiSchema,resolvers);
    }); // cargar solamente una vez antes de correr las pruebas
    
    // probar los resultados de los resolvers se debe hacer de forma asincrona
    it("Comprobar respuesta correctar de query 'hello'", async () => {

        try {
            const query = `
                {
                    hello   
                }
            `;
            
            const { data: { hello } } = await tester.graphql(query,undefined,undefined,{});

            expect(hello).to.be.a('string');
            expect(hello).to.equal('Hello World!!');
            

        } catch (error) {
            console.log({error})
        }
    });


    it("Comprobar respuesta correctar de query 'helloWithName'", async () => {

        try {
            const query = `
            
                query Query($name: String!) {

                    helloWithName(name: $name)
                }   
            `;
            const name = "Hola";
            
            const {
                data: {
                    helloWithName
                }
            } = await tester.graphql(query,undefined,undefined,{name});

            expect(helloWithName).to.be.a('string');
            expect(helloWithName).to.equal(`Hello ${name}!!`);

        } catch (error) {
            console.log({error})
        }
    });

    it("Comprobar respuesta correctar de query 'helloToGraphQLCourse'", async () => {

        try {
            const query = `
            
                {
                    helloToGraphQLCourse
                }
            `;
            const response = "Hello to GraphQL Course!!";
            
            const {
                data: {
                    helloToGraphQLCourse
                }
            } = await tester.graphql(query,undefined,undefined,{});

            expect(helloToGraphQLCourse).to.be.a('string');
            expect(helloToGraphQLCourse).to.equal(response);
            expect(helloToGraphQLCourse).not.to.equal("");

        } catch (error) {
            console.log({error})
        }
    });

    it("Comprobar respuesta correctar de query 'list'", async () => {

        try {
            const query = `
            
                {
                    list
                }
            `;
            
            const {
                data: {
                    list
                }
            } = await tester.graphql(query,undefined,undefined,{});

            expect(list).to.be.a('array');
            expect(list).to.have.lengthOf(0);


        } catch (error) {
            console.log({error})
        }
    });
});



