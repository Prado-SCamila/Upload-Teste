import React from 'react';

import './Doclist.css';


import person from '../../assets/Personimg.png';
import cadDoc from '../../assets/imgcadastro.png';
import biblio from '../../assets/biblio.png';
import help from '../../assets/help.svg';
import input from '../../assets/input.svg';
import Dados from '../../../src/services/Data.json';
import Nav from '../../components/NavBar/nav';

import SeachBar from '../../components/SeachBar';
import DadosPesquisa from '../../services/Data.json';


export default function Listagem(){

    return(
    <> 
    {/*  fragment component  */}

    <div class="header-bar">
    <SeachBar placeholder="Pesquisar documento..." data={DadosPesquisa}/>
    </div>
    
    <Nav/>

    <section class="list-area-content">
        <div class="links-area">
            <ul>
                <li><a href="#">Compartilhar</a></li>
                <li><a href="#">Visualizar Documento Original</a></li>
                <li><a href="#">Gerar PDF</a></li>
                <li><a href="#">Editar</a></li>
            </ul>
        </div>
        <div class="text-items">
            <p>Nome : skjzdufhgkjhklnklklxdhfkg</p>
            <p>N:7156234753</p>
            <p>CNPJ: 5273456/0001</p>
        </div>
        <div class="resumo">
            <h2>Resumo</h2>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "Não há ninguém que ame a dor por si só, que a busque e queira tê-la, simplesmente por ser dor..."</p>
        </div>
        <div class="indice">
            <h2>Índice</h2>
            <p>Lorem ipsum</p>
        </div>
        <div class="texto">
            <h2>Texto do Documento</h2>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vestibulum facilisis ultrices augue sed pulvinar. 
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tincidunt pretium pretium. Vestibulum faucibus ipsum vitae purus efficitur, lobortis luctus ex fermentum. Nunc facilisis rhoncus tellus id tristique. Maecenas ac ligula quis magna fringilla vulputate. Pellentesque viverra vulputate tempus. Mauris non auctor eros, quis pharetra elit. Maecenas lobortis vehicula ante, non mollis mi malesuada a. Quisque leo nibh, molestie et odio id, egestas dictum sapien. Vivamus posuere, nulla at rutrum bibendum, enim purus hendrerit lacus, vel laoreet massa turpis non purus. Aliquam a posuere nulla. Proin eu lorem ac turpis mattis elementum. Aliquam aliquam eu tortor non tristique. Morbi id sem magna. Suspendisse eleifend augue ac orci pharetra mollis.</p>
        </div>
    </section>
</>
    )
}