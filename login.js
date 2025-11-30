// Función que maneja el inicio de sesión
function validarLogin(event) {
  event.preventDefault();

  const CLAVE_SECRETA = "ihc";
  const passwordInput = document.getElementById("password").value;

  if (passwordInput.toLowerCase() === CLAVE_SECRETA) {
    alert("¡Acceso concedido! Bienvenido.");
    window.location.href = "LP.html"; // Redirección
  } else {
    alert("Clave incorrecta. Inténtalo de nuevo.");
    document.getElementById("password").value = "";
  }

  return false;
}

// Menú hamburguesa
const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".Menu-Horizontal");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
