let textoOriginal = "";
let boolean = false;

function mudarTexto() {
  const texto = document.getElementById("t1");

  if (!boolean) {
    textoOriginal = texto.innerHTML;
    texto.innerHTML = "Título alterado";

    boolean = true;
} else {
      texto.innerHTML = textoOriginal;
      boolean = false;
  }
}