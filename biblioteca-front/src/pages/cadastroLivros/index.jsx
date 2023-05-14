import React from 'react'
import './styles.css'
import Label from '../../components/Label';
import Botao from '../../components/Botao';
import { useState } from 'react';

const CadastroLivros = (props) => {
    
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [ano, setAno] = useState('')

    return (
      <>
        <div className='cadastroLivros'>
            <section className='formulario'>
                <form>
                    <h1>Preencha os dados para cadastrar seu livro</h1>
                <div>
                <h5>Título</h5>
                <Label
                    obrigatorio={true}
                    placeholder={"Digite o título do livro"}
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                ></Label>
                <h5>Autor</h5>
                <Label
                    obrigatorio={true}
                    placeholder={"Digite o autor do livro"}
                    valor={autor}
                    aoAlterado={valor => setAutor(valor)}
                ></Label>
                <h5>Ano</h5>
                <Label
                    obrigatorio={true}
                    placeholder={"Digite o ano de lançamento do livro"}
                    valor={ano}
                    aoAlterado={valor => setAno(valor)}
                ></Label>
                </div>
                <div className='button'>
                    <Botao>
                        Criar livro
                    </Botao>
                </div>
            </form>
            
        </section>
            </div>
      </>
    );
  }
  
  export default CadastroLivros;