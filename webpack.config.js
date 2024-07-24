cons path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida (donde lo va a meter)
    },
    module:{
        rules[
            {
            test: /\.css$/, //Expresión Regex usado para identificar archivos
            use: ['style-loader', 'css-loader'], //Loader para procesar alchivos CSS
            },
            {
                test:/\.js$/, //Regex para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //Loader para convertir JS moderno al JS compatible a más navegadores
                    options: {
                        presets: ['@babel/presets-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Genera  source maps para facilitar la depuración
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta que correra el paquetador
        compress: true, //Habilitar compresión llamada gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
};