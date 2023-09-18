//document.write("Hola mundo")//se genera directamente desde js, para cambiarle el estilo. Para eso se combina con css. Dandole 
//window.alert("hola mundo")
//console.log("hola mundo")

//Declaraciones//
//var area, radio; //para variables globales
//let perimetro //variables locales
//const pi=3.1416 //las contastante se declaran y se les asigna un valor ahí mismo, y son inalterables a lo largo del codigo
//radio=prompt("ingrese el radio")//se usa como el print de python
//area=pi*(radio**2)
//document.write("el area es:" +area+"<br>")//salto de linea dado en js
//perimetro=document.write("el perimetro es: " + (2*pi*radio))

//Otra forma de publicar --> lo ideal
//document.getElementById("id1").innerHTML="Hola mundo"
//var a,b
//a=2
//b=a+3
//document.getElementById("id1").innerHTML="El valor de b es: "+b

//evento onclick y funcion


//entrada y boton
const entrada=document.getElementById("entrada1")
const miBoton=document.getElementById("boton1")
const resultado=document.getElementById("id1")
miBoton.addEventListener("click", function(){
    const numero =parseFloat(entrada.value)
    const resultadoOperacion=numero*2
    resultado.textContent = "El resultado es: "+resultadoOperacion
})
