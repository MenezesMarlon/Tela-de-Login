function login() {
    var usuario = document.getElementById("usuario").value.toLowerCase();
    var senha = document.getElementById("senha").value;


    if(usuario === "admin" && senha === "admin"){
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}