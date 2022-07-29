const h1 = document.querySelector('h1') //Etiqueta html (elemento)
const h2 = document.querySelector('.subtitulo') // Clase de un elemento
const p1 = document.querySelector('#p-2') // Id de un elemento
const input = document.querySelector('input') //Etiqueta html (elemento)
const pid = document.querySelector('#pid') //Etiqueta html (elemento)

// Podemos acceder a los elementos de navegador como si fueran objetos
console.log({
    h1,     h2,
    p1,
    input
});

console.log(input.value);
h1.innerHTML = 'Hola <br> perra'
h2.innerText = 'Hola <br> perra'
console.log(h1.getAttribute('deportes'));
h1.setAttribute('deportes', 'none')
h1.classList.add('location')
h1.classList.remove('location')
console.log(h1.getAttribute('deportes'));

const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img);
//input.append(img)
pid.appendChild(img);
pid.innerHTML=""
pid.appendChild(img);
