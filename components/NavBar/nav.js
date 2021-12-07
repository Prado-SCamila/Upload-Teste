import React from 'react';
import perfil from '../../assets/Personimg.png';
import cadastro from '../../assets/imgcadastro.png';
import ajuda from '../../assets/help.svg';
import logout from '../../assets/input.svg';
import biblio from '../../assets/biblio.svg';

import './nav.css';

export default function Nav(){

    return (
        <nav className="nav-menu">

            <div className="id-logado">
        
                <h2>Funcionário</h2>
                <img src={perfil}/>
                <h2>Matheus Vinicius David</h2>
        
            </div>
            
            <div className= "menu-principal">
                <ul>
                    <li><img src={biblio}/><a class="link-nav" href="/Biblioteca">Biblioteca</a></li>
                    <li><img src={cadastro}/><a class="link-nav"href="/envioDocumento">Cadastrar Docs</a></li>
                    <li><img src={biblio}/><a class="link-nav"href="#">Meu Perfil</a></li>
                </ul>
            </div>
        
            <div className= "menu-rodapé">
                <ul>
                    <li><img src={ajuda}/><a class="link-nav"href="#">Ajuda</a></li>
                    <li><img src={logout}/><a class="link-nav"href="/">Log out</a></li>
                </ul>
            </div>
        </nav>

    );
    }

