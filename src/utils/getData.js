const APIKEY = 'efa94efe0174531c44b75ad069c9637d';
const API_Trendi = `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`    
const API = `https://api.themoviedb.org/3/movie/`
const getData = async (id) => {
    const apiURL = id ? `${API}${id}?api_key=${APIKEY}` : API_Trendi;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData;