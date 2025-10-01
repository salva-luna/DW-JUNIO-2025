function mostrarTexto() {
    var texto = document.getElementById("miTexto").value;
    document.getElementById("resultado").textContent = texto;
}

//nivel 3

document.getElementById("sumForm").addEventListener("submit", function (e) {
    e.preventDefault(); // evita recargar la página
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("resultado2").innerText = "Resultado: " + (a + b);
});