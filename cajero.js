
let saldoCuenta = 580000;
let valor = 0;
let repetir = true;
let intentos = 0;
let usuario, contraseña;


function menu() {
    let opciones = Number(prompt("Seleccione la operacón que desea realizar \n1 - Consultar saldo \n2 - Retirar Dinero \n3 - Consignar dinero \n4 - Transferir \n5 - Salir"))
    return opciones
}

while (intentos < 3) {
    usuario = prompt("ingrese su usuario");
    if (usuario == "angela") {
        contraseña = prompt("ingrese su contraseña")
        if (contraseña == "12345") {

            while (repetir) {
                switch (menu()) {
                    case 1:
                        alert("su saldo es: $" + saldoCuenta);
                        break;
                    case 2:
                        valor=Number(prompt("el valor a retirar es: $"));
                        if (saldoCuenta < valor) {
                            alert("saldo insuficiente")
                        }
                        else{
                            alert("su saldo despues del retiro  es: " + (saldoCuenta - valor));
                        } 
                        break;
                    case 3:
                        valor=Number(prompt("el valor a consignar es: $"));
                        alert("su nuevo saldo: $" + (saldoCuenta + valor));
                        break;
                    case 4:
                        valor=Number(prompt("el valor a tranferir es: $"));
                        if (saldoCuenta < valor) {
                            alert("saldo insuficiente")
                        }
                        else{
                            alert("su saldo despues de transferencia  es: " + (saldoCuenta - valor));
                        } 
                        break;
                    case 5:
                        repetir=(false)
                        break;
                
                }
            }break;
        }else{
            intentos ++;
            alert("su contraseña es errada, intento errado "+ intentos);
        } 
    }else{
        intentos ++;
        alert("su usuario es errado, intento errado "+ intentos);
}
}

if(intentos >=3){
    alert("se supero el numero de intentos, su cuenta se bloqueo");
}



/* while (repetir) {
  let menu = prompt(
    "Seleccione la operacón que desea realizar \n1 - Consultar saldo \n2 - Retirar Dinero \n3 - Consignar dinero \n4 - Transferir \n5 - Salir"
  );
  switch (parseInt(menu)) {
    case 1:
      alert("Su saldo es: " + saldoCuenta);
      break;
    case 2:
      valor = Number(prompt("Inrgese el valor a retirar: "));
      if (valor > saldoCuenta) {
        alert("El saldo en su cuenta es menor al valor a retirar");
      } else {
        alert(
          "Retiro Exitoso. Su nuevo saldo es: " +
            (saldoCuenta = saldoCuenta - valor)
        );
        alert("Retiro Exitoso. Su nuevo saldo es: " + (saldoCuenta -= valor));
      }
      break;
    case 3:
      valor = Number(prompt("Inrgese el valor a retirar: "));
      saldoCuenta += valor;
      alert("El nuevo saldo de la cuenta es: " + saldoCuenta);
      break;
    case 4:
      valor = Number(prompt("Inrgese el valor a retirar: "));
      if (valor > saldoCuenta) {
        alert("El saldo en su cuenta es menor al valor a transferir");
      } else {
        alert("Retiro Exitoso. Su nuevo saldo es: " + (saldoCuenta -= valor));
      }
      break;
    case 5:
      repetir = false
      break;
  }
} */