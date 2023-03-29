const formInput = document.querySelector("#email") as HTMLInputElement;
const form = document.querySelector("#formulario") as HTMLFormElement;
const alertaParagraph = document.querySelector(
  "#alerta"
) as HTMLParagraphElement;
const iconError = document.querySelector("#error-icon") as HTMLImageElement;

window.onload = () => {
  form.addEventListener("submit", validarFormulario);
};

function validarFormulario(e: Event) {
  e.preventDefault();

  const correo = formInput.value;

  if (correo === "") {
    alerta("Please enter your email", "error");
    return;
  }

  validarCorreo(correo);
}

function validarCorreo(email: string) {
  const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;

  if (!email.match(validRegex)) {
    alerta("Please provide a valid email", "error");
    return;
  }

  form.reset();
}

function alerta(mensaje: string, tipo?: string) {
  alertaParagraph.textContent = mensaje;

  if (tipo === "error") {
    iconError.classList.toggle("hidden");
    alertaParagraph.classList.add("text-red-400", "font-semibold");
  } else {
    alertaParagraph.classList.add("text-green-400", "font-semibold");
  }

  setTimeout(() => {
    iconError.classList.toggle("hidden");
    alertaParagraph.textContent = "";
  }, 3000);
}

export {};
