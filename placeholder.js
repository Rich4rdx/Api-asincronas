async function post() {
    const inicio = 10
    const fin = 98
    let lista = []




    try {
        for (let i = inicio; i <= fin; i++) {
            lista.push(`https://jsonplaceholder.typicode.com/posts/${i}`)
          

        }
        const respuesta = await Promise.all(lista.map( lista => fetch(lista) .then(res => res.json())))

        console.log(respuesta);
        


    } catch {
        console.log(Error);



    }




} post()