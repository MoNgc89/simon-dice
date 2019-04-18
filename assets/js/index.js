//se definen las variables globales de todos los botones
const azul = document.getElementById('azul')
const magenta = document.getElementById('magenta')
const verde = document.getElementById('verde')
const amarillo = document.getElementById('amarillo')
const btnEmpezar = document.getElementById('btnEmpezar')

//se declara el constructor de el juego que va a albergar las acciones principales
class Juego{
  constructor(){
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  }

//cuando se llama a inicializar se le agrega la clase css HIDE
//se le indica a js que el nivel empieza en 1
// se  guardan los colores por nombre de var
inicializar(){
  this.elegirColor = this.elegirColor.bind(this)
  btnEmpezar.classList.add('hide')
  this.nivel = 1
  this.colores = {
    azul, magenta, verde, amarillo
  }
}

//IniciarSecuencia es un array con numeros random que genera una secuencia para repetir en el juego
generarSecuencia(){
this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
//en esta secuencia se crea el array de 10 numeros con un valor inicial de 0
//el cual va a ser un numero random multiplicado x4 (el número de botones de color) y se va a redondear hacia abajo
  }

//se declara la funcion siguiente nivel que va a albergar el método iluminarSecuencia
siguienteNivel(){
  this.iluminarSecuencia()
  this.agregarEventosClick()
}

//creamos el método que va a transformar los colores en números con un switch donde no se necesitan breaks
transformarNumeroAColor(numero){
switch(numero){
  case 0:
    return 'azul'
    break
  case 1:
    return 'magenta'
    break
  case 2:
    return 'verde'
    break
  case 3:
    return 'amarillo'
}
}

//se llama a iluminarSecuencia que recorre el nivel de secuencias con un ciclo for
iluminarSecuencia(){
for (let i = 0; i < this.nivel; i++){
  const color = this.transformarNumeroAColor(this.secuencia[i])
  //llamamos a la funcion que hace de hover y se le da un tiempo determinado
//se multiplica x i que es el valor que se agrega por cada secuencia random generada
setTimeout(() => this.iluminarColor(color), 1000 * i)
  }
}

//declaramos la funcioon que hace de hover
// agreganmos una clase css por medio de la variable del boton, pero solor por una fraccion de seg
iluminarColor (color){
  this.colores[color].classList.add('light')
  //agregamos un tiempo de brillo para que solo sea un flashazo y enseguida se apague el color
  setTimeout(() => this.apagarColor(color), 350)
}

//escribimos la funcion de apagar color
apagarColor(color){
  this.colores[color].classList.remove('light')
  }

  agregarEventosClick(){
    this.colores.azul.addEventListener('click', this.elegirColor)
    this.colores.magenta.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)
    this.colores.amarillo.addEventListener('click', this.elegirColor)
  }
  elegirColor(ev){
console.log(this);
  }

}
//Se declara la función del botón principal
//la var juego es la que va a recibir los eventos principales
function empezarJuego(){
  window.juego = new Juego()
}

//la función inicializar va a esconder el boton
