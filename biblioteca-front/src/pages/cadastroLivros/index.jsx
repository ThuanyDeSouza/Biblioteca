import React, { useEffect } from 'react'
import './styles.css'
import Label from '../../components/Label';
import Axios from 'axios';
import Botao from '../../components/Botao';
import { useState } from 'react';
import { Cabecalho } from '../../components/Cabecalho';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CadastroLivros = (props) => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [ano, setAno] = useState('')
    const [id, setId] = useState(0)

    useEffect(()=> {
        if(searchParams.get("id")) {
            fetch("http://localhost:8080/books/" + parseInt(searchParams.get("id")))
            .then(response => response.json())
            .then(data => {
                data = data[0]
                setId(data.livcodigo)
                setTitulo(data.livtitulo)
                setAno(data.livano)
                setAutor(data.livautor)
            })
        }
    }, [])

    const criarOuAtualizar = () => {
        if(id) {
            Axios.put("http://localhost:8080/books/", {
                "codigo": id,
                "ano": ano,
                "titulo": titulo,
                "autor": autor
            }).then(async () => {
                await navigate({pathname: "/consulta"})
            }).catch(e => alert(e.message))
        } else {
            Axios.post("http://localhost:8080/books/", {
                "ano": ano,
                "titulo": titulo,
                "autor": autor
            }).then(async () => {
                await navigate({pathname: "/consulta"})
            }).catch(e => alert(e.message))

        }
    }

    return (
      <>
        <div className='cadastroLivros'>
            <div className='cabecalho'>
                <Cabecalho/>
            </div>
            <div className='contorno'>
            <section className='formulario'>
                <form>
                    <h1>Preencha os dados para cadastrar seu livro</h1>
                <div>
                <h5>Título</h5>
                <Label
                    obrigatorio={true}
                    placeholder={ "Digite o título do livro"}
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
                <div id='buttons'>
                    <Botao click={(e) => {
                        e.stopPropagation();
                        criarOuAtualizar()
                    }}>
                        Criar livro
                    </Botao>
                </div>
            </form>
            <div id='buttons'>
                <Botao click={() => navigate({
                    pathname: "/consulta",
                        })}>
                    Voltar à lista de livros
                </Botao>
            </div>
        </section>
        </div>
            </div>
      </>
    );
  }
  
  export default CadastroLivros;