
export const getPlanets = async (id) => {
    let url = 'https://swapi.dev/api/planets';
    if ( id ) {
        url = `https://swapi.dev/api/planets/${id}`
    }
    try {
        const resp = await fetch(url)
        const data = await resp.json();
        const results = data;
        return results;
    }catch(e) {
        console.log("fallo mi llamada")
    }
}