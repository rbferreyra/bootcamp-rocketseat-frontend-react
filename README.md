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
