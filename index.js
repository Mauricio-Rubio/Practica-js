// Ejercicios
// 1.- Muestra el primer elemento de un arreglo (solución hecha con clousures)
function peek() {
  let index = -1;
  return function show(arr) {
    return arr[(index += 1)];
  };
}
const fElement = peek();
console.log(fElement([1, 29, 90, 30]));

// 2.- Crea una función que reciba un array e imprima elemento por elemento
// Solucion usando arrow function
const showArr = (arr) =>
  arr.forEach((element) => {
    console.log(element);
  });
showArr([1, 29, 90, 30]);

// 3.- Crea una función que imprima cada elemento del objeto
const mau = {
  name: "Mauricio",
  age: 18,
  height: 1.85,
  sport: 'soccer',
  university: 'UNAM',
};
// Con Object keys
const showObj = (obj) => {
  let keys = Object.keys(obj);
  for (let index = 0; index < keys.length; index++) {
    console.log(obj[keys[index]]);
  }
};
// Con Object values
const showObjValues = (obj) => Object.values(obj).forEach((element) => {
    console.log(element);
});
showObjValues(mau)