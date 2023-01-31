const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {

      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'nuevopoke' });
      });
    });
      describe('Propiedades', () => {

        it("Arroja un error si vida no es numero", (done) => {
          Pokemon.create({ name: "Pikachu", health: "asd" })
            .then(() => done(new Error("Vida no es un numero")))
            .catch(() => done());
        });
        it("Arroja un error si el Ataque no es un numero", (done) => {
          Pokemon.create({ name: "Pikachu", attack: "asd" })
            .then(() => done(new Error("El Ataque no es un numero")))
            .catch(() => done());
        });
        it('debería crear el Pokemon si todas las propiedades requeridas están bien', (done) => {
          Pokemon.create({
            name: 'bulbasaur',
            health:10,
            attack:10,
            defense:12,
            speed:13,
            height:1.2,
            weight:12.2 })
            .then(()=> done())
            .catch(()=> done(new Error("las propiedades de el pokemon estan incorrectas")))
        });
        it('no se deben crear dos Pokemons con el mismo nombre', () => {
          try {
            Pokemon.create({name: 'bulbasaur'});
            Pokemon.create({name: 'bulbasaur'});
          } catch (error) {
            (error.message)
          }
        });
      });

});
})