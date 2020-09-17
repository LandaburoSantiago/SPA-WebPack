import getHash from '../utils/getHash';
import getData from '../utils/getData'
import getCast from '../utils/getCast';


const Movie = async () => {
    const id = getHash()
    const movie = await getData(id);
    const cast = await getCast(id)
    const view = `
        <div class ="detail-movie">
            <div class = "detail-img">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.original_title}" id="card">
            </div>
            <div class = "detail-info">
                <h2>${movie.original_title}</h2>
                <p>${movie.overview}</p>
                <h2>Genre</h2>
                <p>${movie.genres.map(gen =>`#${gen.name}` )}</p>
                <h2>Qualification</h2>
                <p id="qualification">${movie.vote_average}</p>
                <h2>Cast</h2>
                <p id="cast">${cast.cast.map(act => `${act.name}; `).join(' ')}</p>
            </div>
        </div>
    `;
    return view
};


export default Movie;