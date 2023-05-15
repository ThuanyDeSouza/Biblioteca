import React from 'react'
import './styles.css'
import Cards from '../../components/Card/Cards';
import { Cabecalho } from '../../components/Cabecalho';

const ConsultaLivros = () => {
    return (
      <>
        <div className='cabecalho'>
          <Cabecalho/>
        </div>
        <div className='consultaLivros'>
        <Cards />
        </div>
      </>
    );
  }
  
  export default ConsultaLivros;