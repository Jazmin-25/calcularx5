
for (let cont = 0; cont < 100; cont+=5){
    console.log(cont);
}//for cont

let cont = 0;
while (cont < 100){
    console.log(cont);
    cont+=5
}// while


cont =0;
do {
    console.log(cont);
    cont+=5;
} while (cont<100);

console.log("********Libros*********");

let libros = ["Cien Años de Soledad", "Rayuela", "La Catedral del mar",
 "El Carrousel", "Memorias de una Geisha", "1984","El Hobbit", "Farenheit 451"];
 //"Farenheit 451"
let index=0;
 for (let index = 0; index < libros.length; index++) {
    console.log(libros[index]);    
 }// for index
 console.log("************ Libros while ************");
index= 0;
while (index<libros.length) {
    console.log(libros[index]);
    index++;
}//while
console.log("*********  Libros do **********");
index=0;

do {
    console.log(libros[index]);
    index++;
} while (index<libros.length);//do while

