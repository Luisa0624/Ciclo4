//alert("Mensaje de alerta")

let edad = "30";
const nombre = "Luisa Maria"

console.log(nombre + " Tiene "+ edad + " Años" )

let nombres = ["Luisa","Pilar","Natalia"];
nombres[3] = "Pedro";

console.log(nombres);

//sentencia IF

const name = "Luisa"
let age = 12;
let menssage ="";

if(age < 18){
    menssage = name + " es menor de edad";
}else{
    menssage = name + " es mayor de edad";
}

console.log(menssage);

//let info = document.write(menssage);

let info = document.getElementById("dato");
info.innerHTML = menssage;