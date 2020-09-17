const APIKEY = 'efa94efe0174531c44b75ad069c9637d';  
const API = `https://api.themoviedb.org/3/movie/`
const getCast = async (id) => {
    const apiURL = `${API}${id}/credits?api_key=${APIKEY}`
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getCast;