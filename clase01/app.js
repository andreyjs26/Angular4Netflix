console.log('Any');


/* Arreglos
 concat concatena dos arreglos en arreglo nuevo pero no modifica arreglo anterior
 join retorna strings separados por parametro
 push agregar un valor, si modifica el array original
 pop saca el ultimo elemento del arreglo, no tiene elemento
 shift saca el primer elemento del arreglo
 unshift agregar elemento en primera posicion
 slice subdivide array parametros(posicion inicial y posicion final), si es negativo agarra hasta el final menos la cantidad
 splice subdivide el array principal , parametros index, numeros a remover y agrega en pedazo que que elimino
 reverse invierte array y lo modifica
 sort es alfabetico

 foreach necesita como argument una funcion, recorre elementos arreglos, primer parametro elemtn, indx, array
 map retorna un array nuevo, primer parametro elemtn, indx, array
 filter retorna un array dependiendo la condicion true or false
 every retorna true si recorre todo, false si en alguna se retorna false
 any retorna true si encuentra encuentra alguno , false si ninguno retorna false
 reduce retorna el valor y lo recibe en siguiente llamado, se recibe un parametro
 reduceRight igual a la anterior pero del otro lado
*/
let frutas = ['kiwi','papaya','limon'];
frutas.concat('mango');
frutas.join('/');
frutas.push('melon');
frutas.pop();
frutas.shift();
frutas.unshift('mango');
frutas.slice(2,3);
frutas.slice(2,-1);
frutas.splice(1);
frutas.splice(2,2);
frutas.splice(1,1,'maracuya');
frutas.reverse();

let numeros = [4,5,55,98,10];
numeros.sort();


console.group('forEach');
frutas.forEach(function(x,y,z){
    console.log(`La fruta es: ${x}`);
    console.log(arguments);
});
console.groupEnd('forEach');

console.group('map');
let fa01 = frutas.map(function(fruta){
    return fruta.toUpperCase();
});
console.log(fa01);
console.groupEnd('map');

console.group('filter');
let fa02 = frutas.filter(function(fruta){
    return fruta === 'kiwi';
});
console.log(fa02);
console.groupEnd('filter');

console.group('every');
let fa03 = frutas.every(function(fruta){
    return fruta === 'kiwi';
});
console.log(fa03);
console.groupEnd('every');

console.group('some');
let fa04 = frutas.some(function(fruta){
    return fruta === 'kiwi';
});
console.log(fa04);
console.groupEnd('some');

console.group('reduce');
let fa05 = frutas.reduce(function(valor){
    return valor +'a';
},'Holaa');
console.log(fa05);
console.groupEnd('reduce');

//Template Strings

console.log(`Las frutas son ${frutas[0]} valen $${5*5},
    doble reglon
    valor diferennte`);


//Destructuracion

//let [a,b,c] = frutas;
let [a,,,d] = frutas;

let gato = {
    nombre: 'Misingo',
    maullar: 'Miauu!'
};
let {maullar: f,nombre: e,g} = gato;

//Arrow function
frutas.forEach((x)=>{
    console.log('Fruta');
});

/*Argumentos son los que yo envio y la funcion recibe
Parametros son los que uno asigna
*/
// Spread operator
console.group('Spread');
function cualquiera(nombre = 'John Smith', ...numeros){
    console.log(nombre,numeros);
}
cualquiera('Brian',4,5,67);
cualquiera(undefined,4,5,67);
console.groupEnd('Spread');



/*
Base prototopica
Todo objecto se basa en un prototipo

Si se busca la propiedad y no la encunetra la busca en su base prototipica hasta llegar a la base prototipica null
*/

let carroA = {
    model : 'Ford',
    arrancar : function(){
        console.log('arrancar');
    }
};

let carroB = Object.create(carroA);
carroB.model = 'Ford';

function animal(){

}
animal.prototype = carroA;

let perro = new animal;
// El new esta haciendo
let perro2 = Object.create(animal.prototype);
animal.call(perro2);


function Foo (){

}
Foo.author = 'Andrey';
Foo.prototype.x = 10;
Foo.prototype.calculate = function(){
    return this.x*this.y;
};
let b = new Foo;
b.y = 20;
let c = new Foo;
c.y = 30;
/* si se metiera la funcion calculate dentro de la funcion foo. Se estaria metiendo dentro de cada uno llenando espacio en memoria.
    por eso las cosas que no vayan a cambiar y se usean constantemente mejor dejarlas en el prototype
*/
