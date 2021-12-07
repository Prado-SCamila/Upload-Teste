import React from 'react';
import { useHistory } from "react-router-dom";

import './home.css';
import Logo from '../../assets/login1.png';
import ellipse1 from '../../assets/ellipse1.png'
import ilustracao from '../../assets/ilustracao-home.svg';
import sideImage from '../../assets/component.svg';
import card1 from '../../assets/card1.svg';
import card2 from '../../assets/card2.svg';
import cardImage1 from '../../assets/ellipse-card1.png';
import cardImage2 from '../../assets/ellipse-card2.png';
import {  useNavigate } from 'react-router';


import { MdArrowForward, MdSearch } from "react-icons/md";


import SeachBar from '../../components/SeachBar';
import DadosPesquisa from '../../services/Data.json';

export default function Home() {

    const navigate = useNavigate();

 return (
   <main>
       <header className="header-home">
            <div className="container">
                <div className="logoimg">
                    <img src={Logo} alt="Logo Linx" />
                </div>

                <button 
                type="submit"  
                className="btn-nav-home"
                onClick={() => navigate('/login')}
                        
                >
                <div className="conteudo-btn">
                Sou funcionario <MdArrowForward size={28} padding-top="5px" color="#FEAB03"/>
                
                </div>
                </button>
            </div>
       </header>

       <section className="home-search">
           <div className="imagem-home">
               <img src={ellipse1} alt="" />
           </div>
           <div className="conteudo-search">
               <h1>m3lc</h1>
                <SeachBar placeholder="Pesquisar documento..." data={DadosPesquisa}/>
           </div>
       </section>

       <section className="home-sobre">
            <div className="imagem-sobre">
                <img src={ilustracao} alt="" />
            </div>

            <div className="text-sobre">
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.</p>
            </div>

            <div className="imagem-fundo">
                <img src={sideImage} alt="" />
            </div>
       </section>

       <section className="home-cards">
            <img className="imgFundo img1" src={cardImage1} alt="" />
            <img className="imgFundo img2" src={cardImage2} alt="" />
        
            <div className="conteudo-cards">
                <div className="card card1">
                    <img className="imagemcard" src={card1} alt="" />
                    <div className="textcard">
                    <p>Organizamos seus arquivos</p>
                    <p>Organizamos sua vida</p>
                    </div>
                </div>

                <div className="card">
                <img className="imagemcard"src={card2} alt="" />
                <div className="textcard">
                <p>Facilitamos sua leitura</p>
                <p>Facilitamos sua vida</p>
                </div>
            </div>
            </div>
           
       </section>

       <footer>
           <div className="rodape">
               <div className=" conteudo-Rodape text">
                    <h3>Linx</h3>
               </div>
               <div className="conteudo-Rodape2 text">
                    <h3>M3lc</h3>
               </div>
           </div>
       </footer>
   </main>
 );
}