const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const isDevelopment = process.env.NODE_ENV !== 'production'
module.exports = {
  mode: isDevelopment ? "development" : "production",// mode que irar executar
  devtool: isDevelopment ? "eval-source-map" : 'source-map',//mapeamento do codigo para mostrar erros e as demais coisa
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: { // saida dos arquivos traduzido para web 
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: { // as extensão dos arquivos 
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  // faz com que adiciona automático o script js no html
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),

  ].filter(Boolean),
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    hot: true
  },
  module: {
    rules: [
      //toda as vezes que import o arquivo jsx voce irar ler o arquivo com babel loader
      {
        test: /\.(j|t)sx$/, // pegar todos os arquivos jsx
        exclude: /node_modules/,//excluir o node_modules
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      //arquivo Css
      {
        test: /\.scss$/, // pegar todos os arquivos jsx
        exclude: /node_modules/,//excluir o node_modules
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  }
}