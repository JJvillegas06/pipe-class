const preguntas = document.getElementsByTagName("p")
const respuestas = document.getElementsByTagName("button")
const letrero = document.querySelector(".resultado")

let respuestaUsuario
let counter = 0
counter++




console.log(respuestas)

respuestas[0].addEventListener('click',Sumar)
respuestas[1].addEventListener('click',Sumar)
respuestas[2].addEventListener('click',Sumar)


function Sumar(){
   
    
     let resultadoVerdadero = parseInt(preguntas [0].textContent)+ parseInt(preguntas[2].textContent)

     if(resultadoVerdadero === parseInt(respuestas[1].textContent)){
        letrero.innerHTML = "correcto"
     }else{
        letrero.innerHTML = "incorrecto"
        console.log(letrero)
     }
    
     
     console.log(resultadoVerdadero)
     console.log(respuestas[1].innerHTML)
     console.log(counter)



    
}


