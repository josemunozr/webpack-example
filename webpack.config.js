module.exports = {
  resolve:{
    extensions: ['','.js','.jsx']
  },
  context: __dirname,
  entry:{
    app: ['./app.jsx']
  },
  output: {
    path: './build',
    filename: 'app.js',
    publicPath: '/build/'
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  }
}
