import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

//Ao incluir dois ou mais componentes sucessivamente,
//deve-ser incluir dentro de uma tag HTML,
//porém pode-se utilizar o conceito de React.Fragment
//@doc https://pt-br.reactjs.org/docs/fragments.html
export default function App() {
    return (
        <React.Fragment>
            <Header />
            <Footer />
        </React.Fragment>
    );
}
