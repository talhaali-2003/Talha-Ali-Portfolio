const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js', // Entry point of your React app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpilation
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Handle CSS using style-loader and css-loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template
      filename: 'index.html', // Output HTML filename
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing .js and .jsx files without specifying extensions
  },
  devServer: {
    contentBase: './dist', // Serve files from the 'dist' directory
    port: 3000, // Port for development server
  },
};