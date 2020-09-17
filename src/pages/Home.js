import getData from '../utils/getData';
const Home = async() => {
        const movie = await getData();
        const view = `
                    <div clas="movies">
                        <h3>
                            <div class = "title-home">
                                Trending of week
                            </div>
                        </h3>
                        <article class="movie">
                            ${movie.results.map(mov=> ` 
                            <div class="card" style="width: 18rem;" id="car">                           
                                <img src="https://image.tmdb.org/t/p/w500${mov.backdrop_path}" class="card-img-top" alt="...">
                                <div class="card-body" id="car-body">
                                    <h4 class="card-title">${mov.original_title}</h4>
                                    <p class="card-text">Qualification: ${mov.vote_average}</p>
                                    <a href="#/${mov.id}/" class="btn btn-primary">+</a>
                        
                                </div>
                            </div>
                       
                            `).join('')}
                        </article>
                    </div>
                    
        `;
        
        return view;
        
};

export default Home;