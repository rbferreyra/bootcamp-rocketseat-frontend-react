import React, { useState, useEffect } from 'react';
import api from './services/api'

import './App.css';
//import backgroundImage from './assets/background.jpg';

import Header from './components/Header';
import Footer from './components/Footer';

//Ao incluir dois ou mais componentes sucessivamente,
//deve-ser incluir dentro de uma tag HTML,
//porém pode-se utilizar o conceito de React.Fragment
//@doc https://pt-br.reactjs.org/docs/fragments.html
export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    // useState retorna um array com 2 posições
    //
    //1º. variável com o seu valor inicial
    //2º. função para atualizarmos esse valor

    // IMUTABILIDADE
    async function handleAddProject() {
        // no metodo abaixo, estamos alterando a variável, incluindo novo valor
        // dessa forma, não respeita a "imutabilidade" da váriavel
        // projects.push(`Novo projeto ${Date.now()}`);

        // para conformar a imutabilidade da váriavel, 
        // deve-se criar um novo array, não adicionando um novo valor ao array
        // assim percorremos a variável utilizando SPREAD OPERATOR
        // adicionando um novo valor
        // setProjects([ ...projects, `Novo projeto ${Date.now()}`]);
        
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Jhon Doe"
        });

        const project = response.data;
        
        setProjects([ ...projects, project]);
    }

    return (
        <React.Fragment>
            <Header title="Projetos" />

            {/* 
            para renderizar uma imagem, precisa configurar no webpack 
            uma regra chamada "file-loader"
            
            <img width={300} src={backgroundImage} />
            */}
            

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

            <Footer />
        </React.Fragment>
    );
}
