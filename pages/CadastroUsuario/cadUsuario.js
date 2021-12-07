import React from 'react';
import SearchBar from '../../components/SeachBar';
import Nav from '../../components/NavBar/nav';
import Dados from '../../services/Data.json';
import {  useNavigate } from 'react-router';
import axios from 'axios';
import { useState } from 'react';
import User from "../../assets/user.svg";
import '../CadastroUsuario/cadUsuario.css';


export default function CadastroUsuario(){

    const navigate = useNavigate();

    const [ nome, setNome ] = useState();

    const [ email, setEmail ] = useState();

    const [ senha, setSenha] = useState();

    const [ tipoUsuario, setTipoUsuario ] = useState();

    const [ errorMensa, setErroMensa ] = useState();

    function cadastrarUsuario(event){
        event.preventDefault();

        setErroMensa('')

        console.log(nome,email, senha, tipoUsuario)

        axios
            .post('https://localhost:5000/api/Usuario', {
                nome : nome,
                email : email,
                senha :  senha,
                tipoUsuario :  tipoUsuario,
            })

            .then((resposta) => {
                if (resposta.status === 200) {
                    localStorage.setItem('usuario-cadastro', (resposta.data.token));
                    console.log(resposta.data);

                    if (localStorage.getItem('usuario-cadastro') !== null) {
                        navigate('/')

                    } else{
                        navigate('/CadastroUsuario')

                    }

                }

            })
            .catch((erro) => console.log(erro));
      
    };

    return(
        <>
         <header className="mainHeader">
            <div className="form-header">
            <SearchBar Data={Dados} placeholder="Pesquisar"/>
            </div>   
        </header>

            <Nav/>

        <section className="cadastro-area">

         <img className="icone-user" src={User} alt="icone-usuario"/><h3>Cadastrar Novo Usuário</h3>

        <form action="" className="form-cadastro" onSubmit={cadastrarUsuario}> 

                        <div className="campo-nome-cad">
                             <label>Nome</label>
                             <input className="inputs-cad" type="text" onChange={(event) => setNome(event.target.value)} name="" id=""/>
                         </div>
     
                         <div className="campo-email-cad">
                             <label>Email</label>
                             <input className="inputs-cad" type="email" onChange={(event) => setEmail(event.target.value)} name="" id=""/>
                         </div>
                         
                         <div className="campo-senha-cad">
                             <label>Senha</label>
                             <input className="inputs-cad" type="password" onChange={(event) => setSenha(event.target.value)} name="" id=""/>
                         </div>

                         {/* <div className="campo-acesso-cad">
                             <label>Tipo de Acesso</label>
                             <input className="inputs" type="radio" onChange={(event) => setTipoUsuario(event.target.value)} name="" id="" />
                         </div> */}

                         <div className="campo-acesso-cad">
                           <p>Tipo de Acesso</p>
                            <div className="radios">
                    
                         <div className="radio1">
                            <label>Funcionário</label>
                        <input className="inputs-btn" type="radio" onChange={(event) => setTipoUsuario(event.target.value)} name="" id="r1" />
                        </div>

                       <div className="radio2">
                            <label>Administrador</label>
                       <input className="inputs-btn" type="radio" onChange={(event) => setTipoUsuario(event.target.value)} name="" id="r2" />
                        </div>
                        </div>
                        </div>

                         <button className="btn-envio-cad" type="submit" >Enviar</button>
                       
                     </form>              
                   
    </section>

                    <div className="lista-usuarios">
                        <p>Usuarios Cadastrados</p>
                        <hr></hr>
                        <p>Matheus David</p>
                        <p>Camila P. Silva</p>
                        <p>Letícia Araújo</p>
                        <p>Leandro Rangel</p>
                        <p>Lucas H. Neves</p>
                    </div>

                 
</>
)
}