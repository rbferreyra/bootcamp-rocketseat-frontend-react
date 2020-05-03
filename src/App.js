import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

//Ao incluir dois ou mais componentes sucessivamente,
//deve-ser incluir dentro de uma tag HTML,
//porém pode-se utilizar o conceito de React.Fragment
//@doc https://pt-br.reactjs.org/docs/fragments.html
export default function App() {
    const [projects, setProjects] = useState([
        "Desenvolvimento App",
        "Frontend web"
    ]);

    // useState retorna um array com 2 posições
    //
    //1º. variável com o seu valor inicial
    //2º. função para atualizarmos esse valor

    // IMUTABILIDADE
    function handleAddProject() {
        // no metodo abaixo, estamos alterando a variável, incluindo novo valor
        // dessa forma, não respeita a "imutabilidade" da váriavel
        // projects.push(`Novo projeto ${Date.now()}`);

        // para conformar a imutabilidade da váriavel, 
        // deve-se criar um novo array, não adicionando um novo valor ao array
        // assim percorremos a variável utilizando SPREAD OPERATOR
        // adicionando um novo valor
        setProjects([ ...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <React.Fragment>
            <Header title="Projetos" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

            <Footer />
        </React.Fragment>
    );
}
