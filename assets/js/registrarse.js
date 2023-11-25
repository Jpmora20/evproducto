document.addEventListener("DOMContentLoaded", function () {
  // Array para simular usuarios registrados
  var usuariosRegistrados = [];

  document.getElementById("registrarForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var popup = document.getElementById("popup");
    var popuperr = document.getElementById("popuperr");

    var nombreCompleto = document.getElementById("nomCompleto").value;
    var nombreUsuario = document.getElementById("nomUsuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (verificarCampos(nombreCompleto, nombreUsuario, contrasena)) {
      if (!existeUsuario(nombreUsuario)) {
        // Agregar el nuevo usuario al array (simulando el registro)
        usuariosRegistrados.push(nombreUsuario);

        // Muestra la ventana emergente de éxito
        mostrarPopupExito(popup);

        // Redirige a la página de inicio después de 2 segundos (puedes ajustar el tiempo)
        setTimeout(function () {
          window.location.href = "index.html";
        }, 2000);
      } else {
        // El usuario ya está registrado, muestra la ventana emergente de error
        mostrarPopupError(popuperr, "El nombre de usuario ya está registrado. Por favor, elige otro.");
      }
    } else {
      // Si algún campo está vacío, muestra un mensaje de error
      mostrarPopupError(popuperr, "Por favor, completa todos los campos.");
    }
  });

  // Función para verificar la duplicidad de usuario en el array
  function existeUsuario(nombreUsuario) {
    return usuariosRegistrados.includes(nombreUsuario);
  }

  // Función para verificar si todos los campos están completos
  function verificarCampos(nombreCompleto, nombreUsuario, contrasena) {
    return (
      nombreCompleto.trim() !== "" &&
      nombreUsuario.trim() !== "" &&
      contrasena.trim() !== ""
    );
  }

  // Función para mostrar el popup de éxito
  function mostrarPopupExito(popup) {
    popup.style.display = "block";

    // Cierra automáticamente la ventana emergente después de 2 segundos
    setTimeout(function () {
      popup.style.display = "none";
    }, 2000);
  }

  // Función para mostrar el popup de error
  function mostrarPopupError(popuperr, mensaje) {
    popuperr.innerText = mensaje;
    popuperr.style.display = "block";

    // Ocultar el popup de error después de 2 segundos (opcional)
    setTimeout(function () {
      popuperr.style.display = "none";
    }, 2000);
  }
});