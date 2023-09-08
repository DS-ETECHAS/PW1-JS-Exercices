// Crie novas funções para responder os diferentes exercícios conforme se pede
function example(){
   //Função de exemplo. Para a executar abra o arquivo index.html e no seu navegador chame o nome dessa função ( example() ) e dê enter para a executar.
   //Essa é uma função de exemplo que usa cria um novo Objeto Date() do javascript para mostrar a data atual no formato ISO.
   let Data = new Date()
   alert("Você executou a função example.")
   console.log("Essa função foi executada em: " + Data.toISOString())
}

function parameterExample(n1, n2){
   //Função de exemplo. Para a executar abra o arquivo index.html e no seu navegador chame o nome dessa função ( example() ) e dê enter para a executar.
   //Essa é uma função de exemplo que têm 2 valores como parâmetros, n1 e n2. 
   alert("Você executou a função parameter Example")
   console.log(n1 + n2)
}