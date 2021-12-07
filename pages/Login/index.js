import React, { useState } from 'react';
import {  useNavigate } from 'react-router';
import axios from 'axios';

// IMAGES
import Logo from '../../assets/login1.png';
import Ilustracao from '../../assets/login2.png';

// SERVICES
import { auth, parseJwt } from '../../services/auth';

// ICO.
import { MdEmail, MdLock, MdArrowBack } from "react-icons/md";


export default function Login() {

    const navigate = useNavigate();

    const [ email, setEmail ] = useState();

    const [ senha, setSenha] = useState();

    const [ errorMensa, setErroMensa ] = useState();

    const [ isLoading, setIsLoading] = useState(false);

    function fazerlogin(event){
        event.preventDefault();

        setErroMensa('')
        setIsLoading(true)
        

        axios
            .post('https://localhost:5001/v1/account/signin', {
                email : email,
                senha : senha
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    setErroMensa(res.data.mensagem);
                    localStorage.setItem('usuario-login', res.data.data.token);
                    console.log(parseJwt(res.data.data.token))

                    setIsLoading(false);

                    if ([auth().jti !== null]) {
                        navigate('/Biblioteca')
                    } else{
                        navigate('/login')
                    }
                }
                
                console.log(errorMensa)
            })
            .catch((res) => {
                //setErroMensa(`E-mail e/ou senha inválidos! Tente novamente`);
                
                setIsLoading(false);
            })
      
    };
    return (
        <main className="login">
            <div className="login-campos">
                 <div className="container-login">
                     <h1>Login</h1>
     
                     <form action="" className="form-login" onSubmit={fazerlogin}>

                        <span style={{color: '#121212', fontSize: '20px'}}>{errorMensa}</span>

                         <div className="campo-email">
                             <MdEmail color="#969696" style={{ fontSize: "34px" }} />
                             <input className="inputs" type="email" onChange={(event) => setEmail(event.target.value)} name="" id="" placeholder="Email..." />
                         </div>
                         
                         <div className="campo-senha">
                             <MdLock color="#969696" style={{ fontSize: "34px" }} />
                             <input className="inputs" type="password" onChange={(event) => setSenha(event.target.value)} name="" id="" placeholder="Senha..." />
                         </div>

                         {
                                isLoading === (true) && 
                                <button className="btn-login" disabled 
                                style={{backgroundColor: 'black', color: 'white'}}
                                >Loading...</button>
                            }

                            {
                                isLoading === (false) &&
                                <button className="btn-login"
                                type="submit"
                                style={{ fontWeight: '400', fontSize: '28px' }}
                                >Login</button>
                            }
     
                         {/* <button className="btn-login" type="submit" >Entrar</button> */}
     
                     </form>
                 </div>
            </div>
            <div className="login-banner">
                 <header className="nav-login">
                     <button 
                     type="submit" 
                     className="btn-nav"
                     onClick={() => navigate('/')}
                     >
                         <MdArrowBack size={32} color="#FEAB03"/>
                         Voltar para home
                     </button>
      
                 </header>
     
                 <div className="conteudo-banner">
                     <div className="conteudo1"><img src={Logo} alt="Logo da empresa Lixn" /></div>
     
                     <div className="conteudo2"><img src={Ilustracao} alt="Ilustração login" /></div>
                 </div>
            </div>
        </main>
      );

}

