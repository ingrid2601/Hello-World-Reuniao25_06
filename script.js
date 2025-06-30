function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   elemento.textContent = nomeUsuario;
}

inserirNome();

//Lista de linguagens escritas:
const linguagens =["JavaScript", "Python","C++"]

console.log (linguagens [0]) //"JavaScript"
console.log (linguagens [1]) //"Phyton"
console.log (linguagens [2]) //"C++"

