import router from './routes';

window.addEventListener('load', router);
// Cuando cambie un hash, realiza una función
window.addEventListener('hashchange', router)
