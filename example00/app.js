for(console.log('A');console.log('B');console.log('C')){
    console.log('D');
}

//array
//in index
// of values

let frutas = ['kiwi','fresas'];

for (fruta in frutas){
    console.log(fruta);
}

for (fruta of frutas){
    console.log(fruta);
}
console.group();
console.groupEnd();

let gato ={
    nombre : "bla",
    edad : 12
};

//object
//in props
for (prop in gato){
    console.log(prop);
}

//funciones

function nueva01(){

}

let nueva2 = function(){

}

let nueva3 = function nueva4(){

}

// labels y breaks
uno:
for (fruta of frutas){
    dos:
    for (prop in gato){
        console.log(prop);
        break uno;
    }
}


//hoisting (elevaciones)

personaje = 'La tocola';
console.log(personaje);
var personaje;

uva();
//si funciona
function uva(){
    console.log('Yo soy una fruta');
}
//no funciona
var uva = function(){
    console.log('Yo soy una fruta');
}

//this
console.log(this); //window

function fresa(){
    console.log(this);

    let that = this;

    function adentro(){
        //cuando declara funcion this va a puntar a window entonces hay que declar otra var para mantenerlo
        console.console.log(that);
    }


}

fresa(); //windows

let carro = {
    paquete : fresa
};

carro.paquete(); // object e.g carro


//ABC
let pulsera = {
    color : 'rojo'
}

fresa();
fresa.apply(pulsera);//son argumentos si deseo enviar parametros tienen que ser por array
fresa.call(pulsera);//son argumentos si deseo enviar parametros tienen que ser por comma

let superFresa = fresa.bind(pulsera);
superFresa('chicaX',67);


//ES6

//arrow functions
ele01.addEventLIstener('click',(e)=>{console.log(this);});


let angular = '';
//function se auto declara y se llama
(function(w,a,u){
    'use strict';

})(window,angular)



let nombre_completo = 'MI amigo ${gato.nombre} tiene ${5*5}';
console.log(nombre_completo);
