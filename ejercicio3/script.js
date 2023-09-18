//variables de clase
const clave = parseInt("1234");
const claveIngresada = document.getElementById("clave");
const btnEnviar = document.getElementById("btnEnviar");
const btnRetirar = document.getElementById("btnRetirar");
const monto = document.getElementById("monto");

//se desactiva la caja y boton para hacer la transacción hasta poder confirmar la clave
monto.disabled = true;
btnRetirar.disabled = true;

    var intentos = 3
    
    btnEnviar.addEventListener("click", function () {
  //cuando se ingresa la clave y se presion enviar, inicia la logica
      const clave1 = parseInt(claveIngresada.value);

      if (clave == clave1) {
        //verifica que la clave sea correcta
        monto.disabled = false; //se habilita la funcion de hacer el retiro
        btnRetirar.disabled = false;
        window.alert("Su clave es correcta, digite el monto que desea retirar");

        btnRetirar.addEventListener("click", function () {
          const monto1 = parseInt(monto.value);
          window.alert("Se han retirado " + monto1 + " pesos colombianos de su cuenta bancaria"); //se confirma la transaccion
          claveIngresada.value = "";
          monto.value = "";
        });
    }

      else {
        intentos = intentos-1
        window.alert("Su clave bancaria es incorrecta, intente nuevamente. Tiene 3 intentos antes de que su cuenta sea bloqueada. Le quedan "+intentos+ " intentos.");
        //si la clave es incorrecta se le notifica al usuario
        if (intentos == 0) {
            window.alert("Su cuenta ha sido bloqueada"); //si ha hecho mas de 3 intentos se le bloquea la cuenta
            monto.disabled = true;
            btnRetirar.disabled = true;
            btnEnviar.disabled = true;
            claveIngresada.disabled = true;
            document.write("Comuniquese con su asesor bancario para desbloquear su cuenta.")
        }
      }
    });

    