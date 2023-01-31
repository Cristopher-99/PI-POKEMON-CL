/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));

  describe('GET /pokemons', () => {
    it('GET /pokemons',  (done)  =>{
      agent.get('/pokemons')
      .then(() => done())
    });
    it('GET /pokemons?name=..', () =>{
      agent.get("/pokemons?name=pikachu").expect(200)
    });
    it('GET /pokemons/:id',  () =>{
       agent.get("/pokemons/25").expect(200)
    });
    it('POST /pokemons',  () =>{
       agent.post("/pokemons").expect(201)
    });
    it('GET /types', () =>{
      agent.get("/types").expect(200)
    });
  });
});

