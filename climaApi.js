async function clima() {
    const url1 = "https://api.open-meteo.com/v1/forecast?latitude=4.5350&longitude=-75.6757&current_weather=true"
    const url2 = "https://wttr.in/Armenia,Colombia?format=j1"
    const url3 = "https://www.7timer.info/bin/astro.php?lon=-75.67&lat=4.53&ac=0&unit=metric&output=json"

    try{
        const peticion1 = fetch(url1) .then(res => res.json())
        const peticion2 = fetch(url2) .then(res => res.json())
        const peticion3 = fetch(url3) .then(res => res.json())

    const resultado = await Promise.race([peticion1,peticion2,peticion3]) 

    let gradosCelsius;

        if (resultado.current_weather) {
            gradosCelsius = resultado.current_weather.temperature

            
        } else if(resultado.current_condition){
            gradosCelsius = resultado.current_condition[0].temp_C

        }else if(resultado.dataseries){
            gradosCelsius = resultado.dataseries[0].temp2m
        }
            

    console.log(`grado celsius en armenia ${gradosCelsius}`);


    
    }catch{

        console.log("hubo un error al hacer la llamada");
        
    }
}

clima()

