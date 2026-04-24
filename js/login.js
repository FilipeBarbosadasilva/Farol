// intercepta o envio do formulário
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // impede reload

    const email = document.querySelector('input[name="nome"]').value;
    const senha = document.querySelector('input[name="senha"]').value;

    if (email === "" || senha === "") {
      alert("Preencha todos os campos!");
      return;
    }

    // pega só o nome antes do @ (ex: filipe@gmail → filipe)
    const nomeUsuario = email.split("@")[0];

    // salva no navegador
    localStorage.setItem("usuarioNome", nomeUsuario);

    // redireciona para home
    window.location.href = "home.html";
  });
});