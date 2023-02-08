
export const getFilms = async (id) => {
    let url = 'https://swapi.dev/api/films';
    if ( id ) {
        url = `https://swapi.dev/api/films/${id}`
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