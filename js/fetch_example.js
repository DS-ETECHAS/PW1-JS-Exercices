function fetchApiData(){
   console.log("Fetching...")
   let result = []
   const data = fetch('https://api.magicthegathering.io/v1/cards').then( data => {return data.json()}).then(json => {
   result = json.cards
   result.map( carta => { console.log(carta.name) })
   })
}