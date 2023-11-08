# PW1-JS-Exercices
Repositório de exercícios em Javascript para fixação.

# Exercícios de Fixação
   - Definindo funções
   - Parâmetros
   - Leitura e manipulação de variáveis
   - Arrays

## Exercícios práticos
### 1. Definindo Funções
     1.1 Crie um função chamada "olaMundo" que ao ser chamada abra uma mensagem na tela do usuário escrito "Olá Mundo via Alert().

     1.2 Crie um função chamada "mostraNome()" que ao ser chamada peça o nome do usuário via Prompt(). Exiba o nome digitado pelo usuário no console.

     1.3 Crie um função chamada "concatenaPalavras()" que ao ser chamada peça duas palavras via Prompt() e as concatene em uma única palavra. Exiba essa concatenação no console.

### 2. Parâmetros
     2.1 Crie um função chamada "somaNumeros()" que ao ser chamada peça 2 números via prompt e os some. Exiba o resultado no console.

     2.2 Crie um função chamada "subtraiNumeros(n1, n2)" que é chamada passando dois valores em sua chamada via parâmetro. Exiba o resultado dessa função via console.

     2.3 Crie um função chamada "criaObjeto" que ao ser chamada peça o nome, a idade e o time favorito do usuário e os adicione em um objeto chamado usuario. Exiba esse objeto no console.

### 3. Leitura e manipulação de variáveis
      3.1 Crie um função chamada "calculadora()" que ao ser chamada peça uma operação e dois números para o usuário via prompt. Para cada operação, a saber, somar, subtrair, multiplicar e dividir. Verifique qual opção foi digitada (utilize o comparador === em uma estrutura como um if ou um switch case) e realize a operação adequada. Exiba o resultado no console.

      3.2 Crie um função chamada "mudaConstante()" que ao ser chamada peça o nome do usuário via Prompt() e o armazene em uma variável a ser definda como constante. Ex: const nome. Exiba o nome digitado pelo usuário no console. Depois peça outro valor para o usuário via Prompt e tente alterar o valor da constante.

### 4. Arrays
     4.1 Crie uma função chamada manipulaArrays() que instancia um array chamado cores que contenha os seguintes valores: [branco, azul, vermelho, verde, preto, amarelo, marrom, violeta, rosa, ciano, magenta, cinza]

     4.2 Modifique a função manipulaArrays() para que ela adicione a cor "Laranja" ao array usando o método push(). Exiba o array resultante no console.

     4.3 Modifique a função manipulaArrays() usando o método pop(). Exiba o resultado do método pop e o array resultante no console.

     4.4 Utilize a função sort() para organizar o array. Exiba o array resultante no console.

     4.5 Modifique a função manipulaArrays() usando o método splice() para remover a cor azul do array. Exiba o array resultante no console.

     4.6 Modifique a função manipulaArrays() para que ela exiba no console o primeiro e o último valor do array. Utilize o atributo .lenght para conseguir recuperar o último valor.

     4.7 Modifique a função manipulaArrays() utilizando a função unshift adicione a cor fucsia ao array. Exiba o array resultante.

     4.8 Modifique a função manipulaArrays() utilizando a função shift remova um elemento do array. Exiba o array resultante.

## 5 Exercícios Funções JS - Funções de String
     
     5.1 Defina uma função praticaStrings() que instancia uma nova string com base no input do usuário. depois, utilizando a função Lenght() mostre o tamanho da string digitada pelo usuário.

     5.2 Dentro da função praticaStrings() utilize a função substr passando 2 parâmetros text.substr(1, 4) e escreva suas descobertas num comentário que explica o que a função slice faz.

     5.3 Dentro da função praticaStrings() utilize a função substr passando 1 único parâmetro. Escreva o que a função substr faz com 1 parâmetro em um comentário acima dos métodos.

     5.4 Dentro da função praticaStrings(). Utilize a função toUpperCase() e mostre no console.log o texto digitado pelo usuário em caixa alta.

     5.5 Dentro da função praticaStrings(). Utilize a função toLowerCase() e mostre no console.log o texto digitado pelo usuário em caixa baixa.

## 6 Exercícios Funções JS - Funções de Arrays

     6.1 Escreva um array contendo 10 nomes.

     6.2 Utilize a função Array length e mostre um console o tamanho do array.

     6.3 Utilize a função Array toString() e mostre o resultado no console.

     6.4 Remova 2 valores do Array e coloque em um novo array chamado "resto" utilizando a função pop.

     6.5 Adicione 3 valores no Array inicial usando a função Push

     6.6  Utilize a função shift no Array inicial e mostre no console o resultado.

     6.7 Utilize a função unshift passando o primeiro valor do Array Resto e mostre no console o array resultante. 

     6.8 Utilize a função array.sort e dê um console.log no array resultante.

     6.9 Utilize a função splice para criar 2 arrays a partir do array inicial.

     6.10 Utilize a função splice para remover 3 elementos do array inicial.

## 7 Exercícios Funções JS - Treino API

     6.1 Utilizando a API https://jsonplaceholder.typicode.com/ crie uma função em javascript que busque todos os usuários cadastrados.

     6.2 Crie uma função que exiba no HTML o nome e email dos usuários cadastrados em uma lista.

     6.3 Crie uma função que mostre os comentários de um post qualquer. Encontre esse post com base no ID.

     6.4 Crie uma função que crie um novo Post (utilize o método Post)

     6.5 Crie uma função que atualize um post. (utilize o método PUT)

     6.6 Crie uma função que delete um post (Utilize o método Delete)

     6.7 Crie uma função que exiba na tela 3 albuns diferentes.

     6.8 Crie uma função que mostre no HTML todas as fotos de um álbum a partir de seu ID.

     6.9 Crie uma função que, ao clicar em um Album, liste todas as suas fotos.


##PROJETOS DE FIXAÇÃO
1. Criar um site em conjunto com Design.
O Site deve usar Bootstrap (ou outra biblioteca/framework frontend) para a construção de seus componentes.
O Site deve conter:
01 Landing Page - Mostrando o que a empresa faz, seus produtos, valores e chamando o usuário para uma ação (comprar/se cadastrar/etc)

02 Tela principal - Tela contendo a ação principal do site. Num site de compras, seria uma lista de produtos, num site de serviços, um formulário para cadastro/orçamento.

03 Tela de cadastro de usuário

04 Tela de login


Todas as páginas devem conter:
Cabeçalho (Barra de navegação, logo, área do usuário)
Footer (Mapa do Site, Redes Sociais, Logo do site em negativo (P/B))

As funcionalidades de login e cadastro não precisam estar funcionais, dado que exigem uma API funcionando. Mas as funções no javascript devem existir usando dados "chumbados" no código para realizar o login. usuário = admin senha = 123456

2. Criar um projeto Pokedex

   Criar um site que possa listar 251 pokemons em cards contendo o nome do pokemon, número e o nome.

   A listagem de pokemons deve permitir com que, ao clicar em um botão em cada card, se abra um janela de "detalhes" sobre aquele pokemon, contendo a imagem do mesmo (Sprite front_default) e especificações sobre o pokemon.
   Em cada card (ou na parte de detalhes, ou na lista) deve-se conter um botão que adiciona o pokemon a uma lista de pokemons "No time" que pode conter até no máximo 6 pokemons.

   A lista de pokemons no time deve conter somente o nome e o ícone do pokemon.