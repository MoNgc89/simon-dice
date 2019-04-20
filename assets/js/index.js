//se definen las variables globales de todos los botones
const azul = document.getElementById('azul')
const magenta = document.getElementById('magenta')
const verde = document.getElementById('verde')
const amarillo = document.getElementById('amarillo')
const btnEmpezar = document.getElementById('btnEmpezar')
//se declara el nivel maximo
const ULTIMO_NIVEL = 5

//se declara el constructor de el juego que va a albergar las acciones principales
class Juego{
  constructor(){
    this.inicializar = this.inicializar.bind (this)
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
    setTimeout(this.siguienteNivel, 500)
  }

//cuando se llama a inicializar se le agrega la clase css HIDE
//se le indica a js que el nivel empieza en 1
// se  guardan los colores por nombre de var
inicializar(){
  this.elegirColor = this.elegirColor.bind(this)
  this.siguienteNivel = this.siguienteNivel.bind(this)
  btnEmpezar.classList.add('hide')
  this.nivel = 1
  this.colores = {
    azul, magenta, verde, amarillo
  }
}

//IniciarSecuencia es un array con numeros random que genera una secuencia para repetir en el juego
generarSecuencia(){
this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4))
//en esta secuencia se crea el array de 10 numeros con un valor inicial de 0
//el cual va a ser un numero random multiplicado x4 (el número de botones de color) y se va a redondear hacia abajo
  }

//se declara la funcion siguiente nivel que va a albergar el método iluminarSecuencia
siguienteNivel(){
  //ahora se agrega el atributo subnivel para que vaya cambiando a partir de 0 y se incrementa al subir nivel
this.subnivel = 0
  this.iluminarSecuencia()
  this.agregarEventosClick()
}

//creamos el método que va a transformar los colores en números con un switch donde no se necesitan breaks
//Cambiamos el metodo para transformar el color a u número
  transformarNumeroAColor(numero){
  switch(numero){
    case 0: return 'azul'
    case 1: return 'magenta'
    case 2:
      return 'verde'
    case 3:return 'amarillo'}}
transformarColorANumero(color){
switch(color){
  case 'azul':
    return 0
  case 'magenta':
    return 1
  case 'verde':
    return 2
  case 'amarillo':
    return 3
}
}


//se llama a iluminarSecuencia que recorre el nivel de secuencias con un ciclo for
iluminarSecuencia(){
for (let i = 0; i < this.nivel; i++){
  let color = this.transformarNumeroAColor(this.secuencia[i])
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
  eliminarEventosClick(){
    this.colores.azul.removeEventListener('click', this.elegirColor)
    this.colores.magenta.removeEventListener('click', this.elegirColor)
    this.colores.verde.removeEventListener('click', this.elegirColor)
    this.colores.amarillo.removeEventListener('click', this.elegirColor)
  }

  elegirColor(ev){
    //se asigna al color elegido un número para que lo guarde
const nombreColor = ev.target.dataset.color
const numeroColor = this.transformarColorANumero(nombreColor)
this.iluminarColor(nombreColor)
//luego hacemos la comparación del número de cada color VS el número generado por la secuencia Random
if(numeroColor === this.secuencia[this.subnivel]){
  this.subnivel++
  if(this.subnivel === this.nivel){
    this.nivel++
    this.eliminarEventosClick()
    if(this.nivel === (ULTIMO_NIVEL + 1)){
      //gana
this.ganoElJuego()
    }  else{
        setTimeout(this.siguienteNivel, 1300)
      }
    }
  }  else {
    this.perdioElJuego()
  }
}

ganoElJuego(){
  swal('ganastes', 'success')
  .then( this.inicializar)
  }
  perdioElJuego(){
    swal('Perdistes ALV', 'error')
    .then(() =>{
      this.eliminarEventosClick()
      this.inicializar()
    })

  }

}
//Se declara la función del botón principal
//la var juego es la que va a recibir los eventos principales
function empezarJuego(){
  window.juego = new Juego()
}

//la función inicializar va a esconder el boton
