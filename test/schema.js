'use strict';

const easyGraphqlTester = require('easygraphql-tester');
const fs = require('fs');
const path = require('path');

const apiSchema = fs.readFileSync(
  path.join(__dirname, './../src/schema/', 'schema.graphql'),
  'utf-8'
);

//const tester = new easyGraphqlTester(apiSchema);

describe('Test schema graphql', () => {
  let tester = null;
  before(() => {
    tester = new easyGraphqlTester(apiSchema);
  }); // cargar solamente una vez antes de correr las pruebas

  // teste en querys
  describe('Type Root: Query', () => {
    it('Llamada de query Hello sea valida', () => {
      // el test lo que hace es revisar que dentro del esquema exista el query hello
      const query = `
                {
                    hello   
                }
            `;

      tester.test(true, query, {});
      // la funcion tes obtiene 3 parametros, primero si la respuesta es valida o no, luego el query que se le pasa, y si lleva argumentos o no
    });

    it('Llamada de query HellowithName sea valida', () => {
      // el test lo que hace es revisar que dentro del esquema exista el query hello
      // crear la query e indicarle el parametro
      const query = `      
                query helloWithName($name: String!) {
                    helloWithName(name: $name)
                }
            `;

      tester.test(true, query, { name: 'Hola' });
      // la funcion tes obtiene 3 parametros, primero si la respuesta es valida o no, luego el query que se le pasa, y si lleva argumentos o no
    });

    it('Llamada de query helloToGraphQLCourse sea valida', () => {
      // el test lo que hace es revisar que dentro del esquema exista el query hello
      // crear la query e indicarle el parametro
      const query = `      
                {
                    helloToGraphQLCourse
                }
            `;

      tester.test(true, query, { name: 'Hola' });
      // la funcion tes obtiene 3 parametros, primero si la respuesta es valida o no, luego el query que se le pasa, y si lleva argumentos o no
    });

    it('Llamada de query list sea valida', () => {
      // el test lo que hace es revisar que dentro del esquema exista el query hello
      // crear la query e indicarle el parametro
      const query = `      
                {
                    list
                }
            `;

      tester.test(true, query, { name: 'Hola' });
      // la funcion tes obtiene 3 parametros, primero si la respuesta es valida o no, luego el query que se le pasa, y si lleva argumentos o no
    });
  });

  // tests en mutation
  describe('Type Root: Mutation', () => {
    it('Llamada de mutation add sea valida', () => {
      // el test lo que hace es revisar que dentro del esquema exista el query hello
      // crear la query e indicarle el parametro
      const query = `      
            mutation addElement($value: String!) {
                add(value: $value)
            }
          
        `;

        

      tester.test(true, query, { value: '1' });
      // la funcion tes obtiene 3 parametros, primero si la respuesta es valida o no, luego el query que se le pasa, y si lleva argumentos o no
    });
  })

  // tests en mutation
  describe('Type Root: Mutation', () => {
    it('Llamada de removeLast sea valida', () => {
      // el test lo que hace es revisar que dentro del esquema exista el query hello
      // crear la query e indicarle el parametro
      const query = `      
            mutation deleteElement {
                removeLast
            }
        `;

      tester.test(true, query,{});
      // la funcion tes obtiene 3 parametros, primero si la respuesta es valida o no, luego el query que se le pasa, y si lleva argumentos o no
    });
  });
});

// usar npx para ejecutar dependencias instaladas de forma local cuando se agreguen scripts
// en el package.json

// "test": "npx mocha" correr mocha para correr los test
