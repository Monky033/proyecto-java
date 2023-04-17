let edad = prompt("¿Cuantos años tenes?"); 
while (edad === "" || isNaN(edad)) {
    edad = prompt("ponela con números");
}
if (edad >= 18) { 
    console.log("PASAAA REYY");
} else { 
    console.log("NOO sos menor, anda a dormir");
}
