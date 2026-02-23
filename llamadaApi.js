 async function llamadaApi() {
    
    const url = Array(10).fill("https://pokeapi.co/api/v2/pokemon/ditto")

    try{
        let promesas = url.map(url => fetch(url) .then(res => res.json()))
        let resultado = await Promise.all(promesas)
        console.log(resultado);
        
    }catch{
        console.log(`la llamada a la api fallo `);
        
        
    }


 }


 llamadaApi()