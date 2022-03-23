const API = 'https://rickandmortyapi.com/api/character/';

// async - porque vamos a esperar que esto suceda y es una promesa
const getData = async (id) => {
    // Si el id existe entonces traaerá la API con la información de esa id, pero si no solamente traerá la API para hacer render del home
    const apiURL = id ? `${API}${id}`: API

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    }
};

export default getData;