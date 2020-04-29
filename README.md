# Frontend React

Bootcamp Rocketseat - Criando frontend da app com React

## Requerimentos

* Yarn

## Instrução inicial

### yarn

Inicializar o gerenciador de pacotes, utilizando o [yarn](https://yarnpkg.com/)

```bash
yarn init -y
```

## Babel

A implementação do React, não é interpretado pelos navegadores, mesmo os mais modernos. Dessa forma, utiliza uma dependência / lib chamada [Babel](https://babeljs.io/). Nada mais é do que um compilador, retornando uma saída compativel com os navegadores, mesmo os mais antigos.

Para isso, instala as seguintes dependências para o processo torna-se funcional.

```bash
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
```

Após instalar as dependências, será necessário criar um arquivo na raiz do projeto chamado `babel.config.js`, incluindo as seguintes configurações:

```javascript
module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
};
```

Feito isso, deve instalar a dependência do babel para executar o processo de transpilação dos arquivos.

```bash
yarn add @babel/cli
```

Para converter o arquivo `src/index.js`, que contém uma função feita em [Arrow Function](https://www.w3schools.com/js/js_arrow_function.asp) para o método compatível com os navegadores, deve-se rodar o seguinte comando:

```bash
yarn babel src/index.js --out-file public/bundle.js
```

Ao verificar o arquivo `public/bundle.js`, nota-se que a estrutura de função Java Script nativa.

## Webpack

[Webpack](https://webpack.js.org/) é um empacotador de módulos estáticos para aplicações Java Script modernas, transformando ativos de frontend como HTML, CSS e imagens.

Para transpilar JavaScript utilizamos uma dependência `babel-loader`, dessa forma devemos instalar:

```bash
yarn add babel-loader
```

Após isso devemos criar um arquivo na raiz do projeto, chamado `webpack.config.js`. Feito as configurações no arquivo, podemos executar o webpack:

```bash
yarn webpack --mode development
```

Nota-se que foi gerado o arquivo `public/bundle.js`, com toda a estrutura feita pelo webpack. Porém, ao realizar qualquer alteração nos arquivos `js`, o mesmo não é sincronizado no navegador.

Para observar qualquer alteração nos arquivos, deve-se instalar uma dependência do webpack para executar um servidor, sincronizando com o navegador

```bash
yarn add webpack-dev-server -D
```

Dessa forma utilizamos a flag `-D` sinalizando para instalar somente em ambimente de desenvolvimento.

Após isso, deve-se incluir no arquivo `webpack.config.js`, a seguinte configuração:

```javascript
devServer: {
    contentBase: path.resolve(__dirname, 'public'),
}
```

Assim, podemos executar o servidor do webpack

```bash
yarn webpack-dev-server --mode development
```

Após isso, pode-ser feito qualquer alteração na aplicação, que será sincronizado com o navegador. Basta acessar a url:

[http://localhost:8080/](http://localhost:8080/)