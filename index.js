// Ejercicios

// 1.- Muestra el primer elemento de un arreglo (solución hecha con clousures)
function peek(){
    let index = -1;
    return function show(arr){
        return arr[index+=1]
    }
}
const fElement = peek();
console.log(fElement([1,29,90,30]));

// 2.- Crea una función que reciba un array e imprima elemento por elemento
// Solucion usando arrow function
const show = (arr) => arr.forEach(element => {
    console.log(element);
}); 
show([1,29,90,30]);