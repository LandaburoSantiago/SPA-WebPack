import Header from '../templates/Header'
import Home from '../pages/Home'
import Movie from '../pages/Movie'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/getResolveRoutes'



const routes = {
    '/': Home,
    '/:id': Movie,
}

const router = async() => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('gird-movies')

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    console.log(route)
    let render = routes[route] ? routes[route]: document.write('HOLA');
    content.innerHTML = await render();
};

export default router