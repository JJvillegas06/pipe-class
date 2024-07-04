const preguntas = document.getElementsByTagName("p")
const respuestas = document.getElementsByTagName("button")
const letrero = document.querySelector(".resultado")
let resultadoVerdadero
let respuestaUsuario
let counter = 0
let random = Math.random()
console.log(random)
let i = 0



respuestas[0].addEventListener('click',()=>{

   let resultadoVerdadero = parseInt(preguntas [0].textContent)+ parseInt(preguntas[2].textContent)
   
   if(resultadoVerdadero === parseInt(respuestas[0].innerHTML)){
      letrero.innerHTML = "correcto"
   }else{
      letrero.innerHTML = "incorrecto"
      console.log(letrero)
   }
      console.log(respuestaUsuario)
      console.log(respuestas)
      reiniciarJuego()
})

respuestas[1].addEventListener('click',()=>{

   let resultadoVerdadero = parseInt(preguntas [0].textContent)+ parseInt(preguntas[2].textContent)
   
   if(resultadoVerdadero === parseInt(respuestas[1].innerHTML)){
      letrero.innerHTML = "correcto"
   }else{
      letrero.innerHTML = "incorrecto"
      
   }
   console.log(resultadoVerdadero)
      console.log(respuestaUsuario)
      console.log(respuestas)
      reiniciarJuego()
})

respuestas[2].addEventListener('click',()=>{
   let resultadoVerdadero = parseInt(preguntas [0].textContent)+ parseInt(preguntas[2].textContent)

   if(resultadoVerdadero === parseInt(respuestas[2].innerHTML)){
      letrero.innerHTML = "correcto"
   }else{
      letrero.innerHTML = "incorrecto"
      
   }
   console.log(resultadoVerdadero)
      console.log(respuestaUsuario)
      console.log(respuestas)
      
      reiniciarJuego()
})

function reiniciarJuego (){
   numeroP1 = Math.floor(Math.random() * 90) + 10
   numeroP2 = Math.floor(Math.random() * 90) + 10
   preguntas[0].textContent = numeroP1
   preguntas[2].textContent = numeroP2
   let numerAleatorio = Math.floor(Math.random() * 3) 
   if(numerAleatorio == 0){
      respuestas[0].textContent = numeroP1 + numeroP2
      respuestas[1].textContent = Math.floor(Math.random() * 90) + 10
      respuestas[2].textContent = Math.floor(Math.random() * 90) + 10
   }else if(numerAleatorio == 1){
      respuestas[0].textContent = Math.floor(Math.random() * 90) + 10
      respuestas[1].textContent = numeroP1 + numeroP2
      respuestas[2].textContent = Math.floor(Math.random() * 90) + 10
   }else if(numerAleatorio == 2){
      respuestas[0].textContent = Math.floor(Math.random() * 90) + 10
      respuestas[1].textContent = Math.floor(Math.random() * 90) + 10
      respuestas[2].textContent = numeroP1 + numeroP2
   }
}
   
   
     

// counter++
   // if(counter === 3){
   //    counter = 0
   // }
   
   // let resultadoVerdadero = parseInt(preguntas [0].textContent)+ parseInt(preguntas[2].textContent)
   // while(resultadoVerdadero === parseInt(respuestas[counter].innerHTML) ){
   //    preguntas[0].innerHTML = Math.floor( random * 25)
   //    preguntas[2].innerHTML = Math.floor( random * 25)
   //    respuestas[0].innerHTML = Math.floor( random  * 100)
   //    respuestas[1].innerHTML = parseInt(preguntas[0].innerHTML) + parseInt(preguntas[2].innerHTML)
   //    respuestas[2].innerHTML = Math.floor( random  * 100)
   //    return
   // }

/*let i = 0 
for (let i = 0; i < respuestas.length; i++){
   respuestaUsuario = respuestas[i].textContent
}




console.log(respuestas.length)

function Sumar(){
   
}
function recorriendo(){
      
      
      if(resultadoVerdadero === parseInt(respuestas[i]).textcontent){
         letrero.innerHTML = "correcto"
      }else{
         letrero.innerHTML = "incorrecto"
         console.log(letrero)
      }
         console.log(respuestaUsuario)
         console.log(respuestas[i])
}*/


   





