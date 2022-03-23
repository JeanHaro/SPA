const resolveRoutes = (route) => {
    // route.length - cuantos elementos tiene de longituds
    if (route.length <= 3) {
        // Si la ruta es /, retorne /, pero si tiene un id en la ruta, retorne id
        let validRoute = route === '/' ? route : '/:id';

        return validRoute;
    }

    // Si es otro enlace mayor a 3 entonces, lanza la misma ruta
    return `/${route}`; // /about
}

export default resolveRoutes;