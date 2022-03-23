// path - nos va a permitir acceder hacia donde estamos dentro de las carpetas
const path = require('path');
// archivo necesario para trabajar en HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Copiar los estilos hacia la carpeta dist
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Modulo que vamos a exportar donde viene cada configuración de lo que va a suceder
// Este modulo es un objeto donde vive esa configuración
module.exports = {
    // Punto de entrada
    entry: './src/index.js', // Está todo nuestro código inicial y de ahí va a partir todo nuestro desarrollo
    // Donde vas a poner este proyecto ya estructurado y compulado listo para mandarse a producción
    output: {
        // Hacia donde lo colocamos
        // dirname - donde se encuentre la carpeta ahí es donde se va a poner una nueva carpeta que es dist
        path: path.resolve(__dirname, 'dist'),
        // Archivo que vamos a generar
        filename: 'main.js'
    },
    // extensiones que va a desarrollar nuestro proyecto
    resolve: {
        extensions: ['.js'],
    },
    // Un modulo con las reglas necesarias que empezaremos a trabajar
    module: {
        rules: [
            {
                // Estructura de babel para eso tenemos que generar un test de como vamos a identificar los archivos segun lo que se encuentran dentro de nuestro entorno
                // /\ - establecemos que es el punto de entrada
                // extensiones js
                // ?$/ - permitir establecer cuales son nuestros elementos
                test: /\.js?$/,
                // exluyemos todo los archivos JS de node_modules
                exclude: /node_modules/,
                // Utilizar un loader o una configuración establecida para trabajar todo nuestro código 
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        // webpack-plugin - nos va a permitir trabajar con los archivos HTML
        new HtmlWebpackPlugin(
            // Establecer lo que necesitamos
            {
                inject: true,
                // donde esta nuestro template base
                template: './public/index.html',
                // donde lo tenemos que mandar o guardar
                filename: './index.html'
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/styles/styles.css',
                to: ''
            }]
        })
    ]
}


