document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("usuario").value;
    const password = document.getElementById("contrasena").value;

    if (verificarCampos(username, password)) {
      const isAuthenticated = verificarCredenciales(username, password);
      if (isAuthenticated) {
        window.location.href = "aplicacion.html";
      } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });


  function verificarCredenciales(username, password) {   
    return true;
  }
  function verificarCampos(username, password) {
    return username.trim() !== "" && password.trim() !== "";
  }
});
