import React from 'react';
import {  useNavigate } from 'react-router';

import '../Biblioteca/Biblioteca.css';

import arrow from '../../assets/arrow.png';
import arrowRight from '../../assets/arrowRight.png';
import background from '../../assets/imgfundo.png';

import Nav from '../../components/NavBar/nav';
import SeachBar from '../../components/SeachBar';
import DadosPesquisa from '../../services/Data.json';


export default function BibliotecaFuncionario(){

    const navigate = useNavigate();

    return(
        <>
         {/* <header className="mainHeader">

            <div className="form-header">
                <SeachBar placeholder="Pesquisar documento..." data={DadosPesquisa}/>
            </div>
            
        </header> */}

        <Nav/>
        <section className="background-list">

        <div className="bar-title">
            <ul>
                <li>CONTRATOS</li>
                <li>NÚMERO</li>
                <li>NOME</li>
                <li>CNPJ</li>

            </ul>
        </div>

        <div className="item-list" onClick={() => navigate('/DocList')}>

                <div class="contratos"><p>Telecom</p></div>
                <div class="numero"><p>1082064</p></div>
                <div class="nome"><p>Minuta_contrato</p></div>
                <div class="cnpj"><p>123.123/0001</p></div>
            
        </div>
        
        <div className="item-list" onClick={() => navigate('/DocList')}>

                <div class="contratos"><p>Telecom</p></div>
                <div class="numero"><p>1082064</p></div>
                <div class="nome"><p>Minuta_contrato</p></div>
                <div class="cnpj"><p>123.123/0001</p></div>
            
        </div>
        
        <img className="background-img" src={background}/>

        <div className="pg-buttons">

        <button className="btn-pagina"><img src={arrow}/></button>
            <p>Página</p>
            <div className="pgnumber">
                <p>1 de 1</p>
            </div>
            <button className="btn-pagina"><img src={arrowRight}/></button>
        </div>
    </section>
</>
)
}