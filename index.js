// 1. Crea una function que tome como parametro un array y devuelva la suma de sus
// elementos.


function functionalidad(){
  let suma = 0;
  for (let a = 0; a < arguments.length; a++){
    suma += arguments[a]
  }
 return suma;
}
console.log(functionalidad(2,2,2,2))