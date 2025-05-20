let usuarios = [];

let area = document.getElementById("comentarios");
area.style.resize = "none";

function crearCuenta(event) {
  event.preventDefault();
  const inpNombre = document.getElementById("inpNombre").value.trim();
  const inpApellido = document.getElementById("inpApellido").value.trim();
  const inpEmail = document.getElementById("inpCorreo").value.trim();
  const inpPostal = document.getElementById("inpPostal").value;
  const inpComuna = document.getElementById("inpComuna").value.trim();
  const inpCalle = document.getElementById("inpCalle").value.trim();
  const inpNumero = document.getElementById("inpNumero").value.trim();
  const comentarios = document.getElementById("comentarios").value.trim();
  const inpPassword = document.getElementById("inpPassword").value.trim();
  const inpPasswordAgain = document
    .getElementById("inpPasswordAgain")
    .value.trim();

  let password = inpPassword;
  let passwordAgain = inpPasswordAgain;
  let validar = true;

  if (inpNombre == "") {
    document.getElementById("errorNombre").innerHTML =
      "Error Ingrese su Nombre";
    document.getElementById("errorNombre").style.color = "#ff7800";
    document.getElementById("errorNombre").style.fontSize = "1.6rem";
    validar = false;
    document.getElementById("inpNombre").addEventListener("focus", function () {
      document.getElementById("errorNombre").textContent = "";
    });
  }

  if (inpApellido == "") {
    document.getElementById("errorApellido").innerHTML =
      "Error Ingrese su Apellido";
    document.getElementById("errorApellido").style.color = "#ff7800";
    document.getElementById("errorApellido").style.fontSize = "1.6rem";
    validar = false;
    document
      .getElementById("inpApellido")
      .addEventListener("focus", function () {
        document.getElementById("errorApellido").textContent = "";
      });
  }

  if (inpEmail == "") {
    document.getElementById("errorEmail").innerHTML = "Error Ingrese su Email";
    document.getElementById("errorEmail").style.color = "#ff7800";
    document.getElementById("errorEmail").style.fontSize = "1.6rem";
    validar = false;
    document.getElementById("inpCorreo").addEventListener("focus", function () {
      document.getElementById("errorEmail").textContent = "";
    });
  }

  if (inpPostal == "") {
    document.getElementById("errorPostal").innerHTML =
      "Error Ingrese su Nombre";
    document.getElementById("errorPostal").style.color = "#ff7800";
    document.getElementById("errorPostal").style.fontSize = "1.6rem";
    validar = false;
    document.getElementById("inpPostal").addEventListener("focus", function () {
      document.getElementById("errorPostal").textContent = "";
    });
  }

  if (inpComuna == "") {
    document.getElementById("errorComuna").innerHTML =
      "Error Ingrese su Comuna";
    document.getElementById("errorComuna").style.color = "#ff7800";
    document.getElementById("errorComuna").style.fontSize = "1.6rem";
    validar = false;
    document.getElementById("inpComuna").addEventListener("focus", function () {
      document.getElementById("errorComuna").textContent = "";
    });
  }

  if (inpCalle == "") {
    document.getElementById("errorCalle").innerHTML =
      "Error Ingrese su Nombre de Direccion";
    document.getElementById("errorCalle").style.color = "#ff7800";
    document.getElementById("errorCalle").style.fontSize = "1.6rem";
    validar = false;
    document.getElementById("inpCalle").addEventListener("focus", function () {
      document.getElementById("errorCalle").textContent = "";
    });
  }

  if (inpNumero == "") {
    document.getElementById("errorNumero").innerHTML =
      "Error Ingrese su Numero de Direccion";
    document.getElementById("errorNumero").style.color = "#ff7800";
    document.getElementById("errorNumero").style.fontSize = "1.6rem";
    validar = false;
    document.getElementById("inpNumero").addEventListener("focus", function () {
      document.getElementById("errorNumero").textContent = "";
    });
  }

  if (comentarios == "") {
    document.getElementById("errorComentario").innerHTML =
      "Error Ingrese un Comentario";
    document.getElementById("errorComentario").style.color = "#ff7800";
    document.getElementById("errorComentario").style.fontSize = "1.6rem";
    validar = false;
    document
      .getElementById("comentarios")
      .addEventListener("focus", function () {
        document.getElementById("errorComentario").textContent = "";
      });
  }

  if (inpPassword == "") {
    document.getElementById("errorPassword").innerHTML =
      "Error Ingrese una Contraseña";
    document.getElementById("errorPassword").style.color = "#ff7800";
    document.getElementById("errorPassword").style.fontSize = "1.6rem";
    validar = false;
    document
      .getElementById("inpPassword")
      .addEventListener("focus", function () {
        document.getElementById("errorPassword").textContent = "";
      });
  }

  if (inpPassword !== "") {
    password = inpPassword;
  }

  if (inpPasswordAgain == "") {
    document.getElementById("errorPassword2").innerHTML =
      "Error Ingrese una Contraseña";
    document.getElementById("errorPassword2").style.color = "#ff7800";
    document.getElementById("errorPassword2").style.fontSize = "1.6rem";
    validar = false;
    document
      .getElementById("inpPasswordAgain")
      .addEventListener("focus", function () {
        document.getElementById("errorPassword2").textContent = "";
      });
  }

  if (inpPasswordAgain !== "") {
    passwordAgain = inpPasswordAgain;
  }

  if (password !== passwordAgain) {
    document.getElementById("errorPassword").innerHTML =
      "Error Contraseñas no Coinciden";
    document.getElementById("errorPassword").style.color = "#ff7800";
    document.getElementById("errorPassword").style.fontSize = "1.6rem";
    document
      .getElementById("inpPassword")
      .addEventListener("focus", function () {
        document.getElementById("errorPassword").textContent = "";
      });
    document.getElementById("errorPassword2").innerHTML =
      "Error Contraseñas no Coinciden";
    document.getElementById("errorPassword2").style.color = "#ff7800";
    document.getElementById("errorPassword2").style.fontSize = "1.6rem";
    document
      .getElementById("inpPasswordAgain")
      .addEventListener("focus", function () {
        document.getElementById("errorPassword2").textContent = "";
      });
      validar = false;
  }

  if (!document.getElementById("chkTerminos").checked) {
    validar = false;
    alert("Debe aceptar los Terminos y Condiciones");
  }

  let seleccion = document.getElementById("selectRegion");
  let region = seleccion.options[seleccion.selectedIndex].text;

  if (validar) {
    const usuario = {
      nombre: inpNombre,
      apellido: inpApellido,
      correo: inpEmail,
      codigoPostal: inpPostal,
      comuna: inpComuna,
      calle: inpCalle,
      numero: inpNumero,
      comentario: comentarios,
      region: region,
    };
    usuarios.push(usuario);
    alert(`Su Datos: \nNombre: ${usuario.nombre}, Apellido: ${usuario.apellido}, Correo: ${usuario.correo}, Codigo Postal: ${usuario.codigoPostal},  Comuna: ${usuario.comuna}, Calle: ${usuario.calle}, Numero: ${usuario.numero}, Region: ${usuario.region}`);
    location.reload();
  }
}
