function fetchApiData(){
   console.log("Fetching...")
   let result = []
   const data = fetch('https://api.magicthegathering.io/v1/cards').then( response => {return response.json()}).then(json => {
   result = json.cards
   result.map( carta => { console.log(carta.name)
   console.log(carta.imageUrl) 
   console.log(carta.artist)})
   })
}


//Exemplo feito em aula
//Quero pegar os dados que vem de uma API
const URL = 'https://jsonplaceholder.typicode.com/posts'
const MTGURL = 'https://api.magicthegathering.io/v1/'


function getApiData(){
//Busca os dados da API
//  GET  URL ( "Link da URL" /  ENDPOINT) 

//Jeito mais bonitinho de se fazer
//fetch(`${URL}/posts`)

//Assíncrono
//Esse código é executado de maneira assíncrona.
//Eu "Peço" algo pra API e "Espero a resposta"
const resultado = fetch(URL).then(
    response => {
        console.log(response)
    }
    )
}

function getCardsList(){
    //fetch(`${MTGURL} + /cards `)
    fetch(MTGURL + '/cards').then( response => {console.log(response.json())})
}

function getCard(id){
    //fetch(`${MTGURL} + /cards `)
    fetch(MTGURL + '/cards/' + id).then( response => {console.log(response.json())})
}