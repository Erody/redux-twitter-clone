var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/reduxtwitter'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.styl$/,
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    },
    // images
	{
		test: /\.(jpe?g|png|gif|svg)$/i,
		include: path.join(__dirname, 'client'),
		loaders: [
			'file?hash=sha512&digest=hex&name=[hash].[ext]',
			'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
		]
	}
    ]
  }
};
