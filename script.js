const persona1 = {
    nombre: "Chano",
    apellido: "Ceballos",
    edad:33,
}

const persona2 = {
    nombre: "Susana",
    apellido: "Fiuri",
    edad:31,
}

const persona3 = {
    nombre: "Pancho",
    apellido: "Villa",
    edad:18,
}

const array1=[persona1, persona2, persona3]

for (let persona of array1){ // for of recorre los objetos dentro del array
    for(let propiedades in persona){ // for in recorro cada una de las propiedades dentro del array
        console.log(persona[propiedades])
    }
}


array2 = array1;

array1.forEach(persona => console.log(persona)) // reemplaza el ciclo for of. recorre los objetos de un array
console.log(array1.find(persona => persona.nombre === "Chano" && persona.edad === 18))

console.log("xxxx")

console.log(array1.filter(persona => persona.nombre === "Chano" || persona.edad === 18))

console.log(array1.some(persona => persona.nombre === "Chano" || persona.edad === 18)) // devuelve true o false si encuentra alguno de los valores

console.log(array1.map(persona => persona.edad > 30)) // traigo un solo campo, y arma un nuevo array

console.log(array1.map(persona => persona.nombre)) // traigo un solo campo, y arma un nuevo array

console.log(array2.sort((persona1, persona2) => {
    if (persona1.nombre < persona2.nombre) {
        return -1
    } else {
        if (persona1.nombre > persona2.nombre){
            return 1
        }
        return 0
    }
}))

console.log(array2.sort((persona1, persona2) => persona1.edad - persona2.edad))