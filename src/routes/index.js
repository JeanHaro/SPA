// Templates
import Header from '../templates/header';

// Páginas
import Home from '../pages/home';
import Character from '../pages/Character';
import Error404 from '../pages/error404';

// Utils
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// Rutas
const routes = {
    '/': Home,
    // Respecto al id del personaje es a la página que se va a mandar
    '/:id': Character,
    '/contact': 'Contact',
}

// hacemos routes a las secciones con id content del index.html de la carpeta public
const router =  async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
}

export default router;
