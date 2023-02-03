
function fechar() { 
    document.getElementById("posiciona").style.display = 'none'; 
}
// Adicionar event listener ao formulário de login
const formLogin = document.querySelector("#formLogin");
formLogin.addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o comportamento padrão de submit

  // Recupera os valores dos campos de entrada
  const useremail = formLogin.querySelector("#userEmail").value;
  const password = formLogin.querySelector("#conPassword1").value;

  // Validação básica dos dados de entrada
  if (!useremail) {
    alert("Por favor, insira o email Correto ");
  } else if (!password) {
    alert("Por favor, insira a senha");
  } else {
    // Aqui você pode colocar sua lógica de validação e autenticação de usuário
    console.log("Dados válidos");
  }
});
