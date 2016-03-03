const NODE_ENV = process.env.NODE_ENV || 'development';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

console.log(NODE_ENV);

var webpackConfig = {
    entry: path.join(__dirname, 'src') + '/index',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name]-[hash].js'
    },

    module: {
        loaders: [
            {// JS
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {// CSS
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: 'style!css-loader!autoprefixer?browsers=last 2 version'
            },
            {// SASS
                test: /\.scss?$/,
                exclude: /(node_modules)/,
                loader: 'style!css-loader!autoprefixer?browsers=last 2 version!sass'
            },
            {// JSON
                test: /\.json$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'json'
            },
            {// Images, fonts, etc
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2|ico)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file',
                query: {
                    name: '[path][name].[ext]?[hash]'
                }
            }
        ]
    },

    postcss: [
        require('autoprefixer')
    ],

    plugins: [
        new webpack.BannerPlugin('Copyright Artem Koziar <a@temich.in.ua>'),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src') + '/index.html'
        }),

        new ExtractTextPlugin('[name]-[hash].css'),

        new CleanWebpackPlugin(['build'], {
            root: path.join(__dirname),
            verbose: true,
            dry: false
        }),

        new webpack.DefinePlugin({ // for global calling in code
            NODE_ENV: JSON.stringify(NODE_ENV),
            createjs: 'easeljs'
        })

        //new BowerWebpackPlugin({
        //    modulesDirectories: ['bower_components'],
        //    manifestFiles: 'bower.json',
        //    includes: /.*/,
        //    excludes: [],
        //    searchResolveModulesDirectories: true
        //})
        //new webpack.ResolverPlugin(
        //    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
        //)
    ],

    // for faster searching modules in 'node_modules'
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js'],
        root: [path.join(__dirname, 'bower_components')]
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    stats: {
        // Nice colored output
        colors: true
    }

};

if (NODE_ENV === 'production') {
    webpackConfig.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin()
    );
} else {
    // Create Sourcemaps for the bundle
    webpackConfig.devtool = 'eval-source-map';
    webpackConfig.devServer = {
        contentBase: './build',
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    };
    // Avoid publishing files when compilation fails
    webpackConfig.plugins.push(new webpack.NoErrorsPlugin());
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;