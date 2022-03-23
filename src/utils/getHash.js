// location.hash - nos da el valor #/1, #/2
// slice() - nos permite eliminar el primer elemento quedando 1, 2
// toLocaleLowerCase() - si el usuario por lo que sea cambio a mayusculas el contenido, siempre lo devuelve en minusculas
// split() - Esa cadena de texto, ese string que tenemos lo que haremos es convertirlo a un arreglo y le indicamos que elimine los slash(/)
// location.hash.slice(1).toLocaleLowerCase().split('/') // [''. '1', '']
const getHash = () =>
 location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; // 1

export default getHash;