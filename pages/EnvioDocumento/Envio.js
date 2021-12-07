import React from 'react';
import {  useNavigate } from 'react-router';
import './Envio.css';
import File from '../../assets/filedocs.svg';
import Nav from '../../components/NavBar/nav';
import SeachBar from '../../components/SeachBar';
import DadosPesquisa from '../../services/Data.json';
import App from '../../App';


export default function UploadArquivo(){

    const navigate = useNavigate();

    return(
        <>
           <header className="mainHeader">

            <div className="form-header">
                <SeachBar placeholder="Pesquisar documento..." data={DadosPesquisa}/>
            </div>
            </header>
         <Nav/>
        <section className="document-area">
    
            <div className="meus-docs">
                <img className="item-meusdocs" src={File}/>
                <p>Meus Documentos</p>
            </div>
    
            <section className="docs-interno">
    
                    <div className="form-docs">
                       
                        <form action="" classNameName="form-documento" >
         
                            <div className="campo-file">
                                <label>Nome</label>
                               <input className="inputs-file" type="text"/>
                            </div>
                            
                            <div className="campo-file">
                                <label>Número do Contrato</label>
                                <input className="inputs-file" type="text" />
                            </div>
    
                            <div className="campo-file">
                                <label>CNPJ</label>
                                <input className="inputs-file" type="text" />
                            </div>
    
                            <div className="campo-file">
                                <label>Detalhes</label>
                                <input className="inputs-file" id="text-box" type="text" />
                            </div>
        
                            <button className="btn-save"
                             type="submit" 
                             onClick={() => navigate('/Biblioteca')}> Salvar</button>
        
                        </form>
                    </div>
                    
                    {/*     
                    <div className="arquivo">
                        <div className="areaUpload">
                            <input className="inputImg"/>
                                <p>Arraste e Solte para Carregar Arquivos</p>
                                 <img className="imgarquivo" src={Envioimg}/>
                        </div>
                    </div> */}
                <div className="upload">  
                    <App/>
                     {/* <FileList/> */}
                </div>
                     {/* <Drop/> */}
        </section>
        </section>
    
    </>
    
    )


}