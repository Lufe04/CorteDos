//variables de clase
const año=document.getElementById("año")
const btnEnviar=document.getElementById("enviar")
const resultado=document.getElementById("id1")
const nombre=document.getElementById("nombre")

//cuando se presiona el boton enviar se inicia el siguioente proceso
btnEnviar.addEventListener("click", function(){
    const año1 =parseInt(año.value)
    const resultadoOperacion=2023-año1
    //si la edad se encuatra entre 18 y 55 años entra en el if que acepta la solicitud
    if(resultadoOperacion>18 && resultadoOperacion<55){
        window.alert("Has sido aprobado para continuar en el proceso ")  
    }
    //si no cumple la condicion se descarta el candidato 
    else{
        window.alert("Lo sentimos, has sido descalificado del proceso ")
    }
})
