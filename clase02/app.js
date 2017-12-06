console.log('Start');

//Clases

//ES5

function Animal(nombre){
    this.nombre = nombre;
}

Animal.prototype.maullar = function () {
    console.log('Miau');
};

let gato = new Animal('Misingo');

//ES6

class SerVivo{
    constructor(){
        this.nacer = true;
    }
    morir(){
        console.log('me mori');
    }
}
/*static mete en base prototipica

*/
function Viviente(){
    this.nacer = true;
}

class Animal2 extends Viviente{
    constructor(nombre){
        super();
        this.nombre = nombre;
    }

    static maullar(){
        console.log('Miau');
    }

    get owner(){
        return `Mi dueño es $(this.autor)`;
    }

    set owner(val){
        console.log('Gracias nuevo dueño');
    }
}
let gato2 = new Animal2('Firulais');



//Generador
function *generador(){

    let nuevo = 2;

    yield resultado =  56 * nuevo;

    nuevo = 1;

    yield 35 * nuevo;
    yield `hola ${nuevo}`;

    console.log('Generando');
}
let g = generador();

//g.return();  status esta
//g.next();  ejecutar funcion


//Patrones de diseño

// Patron Singleton

let instance = null;



class newCookie{
    constructor(){
        if(instance)
            return instance;
        else
            instance = this;

    }
}

let dataCookie = new newCookie;
let dataCookie2 = new newCookie;

console.log(dataCookie === dataCookie2);

//Patron constructor

class Car{
    constructor(config){
        for (let option in config){
            this[option] = config[option];
        }
    }

    mover(){

    }
}

let carro = new Car({
    modelo : 'Ford',
    ruedas : 4
});

let carro2 = new Car({
    modelo : 'Hyundai',
    ruedas : 5
});

console.log(carro);
console.log(carro2);

//Patron Factory
class Pizza{
    constructor(ingredientes){
        for (let option in ingredientes){
            this[option] = ingredientes[option];
        }
    }
}

class Pizzeria{
    pizza(ingredientes){
        return new Pizza(ingredientes);
    }
}

let PizzaHut = new Pizzeria();

let MeatLovers = PizzaHut.pizza({ tipo : 'carne'});
let Hawaiana = PizzaHut.pizza({ tipo : 'piña'});

console.log(MeatLovers,Hawaiana);
