import { useState } from 'react'
import Square from '../components/square'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Home() {

  const [nPortas,setnPortas] = useState(1);
  const [nPresentes,setnPresentes] = useState(1);

  function decremento(){
    if(nPortas > 1){
      setnPortas(--nPortas)}
    }

  function incremento(){
    setnPortas(++nPortas)
  }

  function decrementoPresente(){
    if(nPresentes > 1){
      setnPresentes(--nPresentes)}
    }

  function incrementoPresente(){
    if(nPresentes < nPortas){
      setnPresentes(++nPresentes)
    }
  }

  return (
    <div className='mainContainer'>
      <div className='container'>

        <Square color={'#BD2331'} dimensao={300}>
            <h3>Monty Hall</h3>
        </Square>
        
        <Square color={'#FFFFFF'} dimensao={300}>
            <h4>Qtde Portas?</h4>
            <h1>{nPortas}</h1>
            <button className='button' onClick={()=>decremento()}>-</button>
            <button className='button' onClick={()=>incremento()}>+</button>
        </Square>
      </div>

      <div className='container'>
        <Square color={'#FFFFFF'} dimensao={300}>
            <h4>Porta com Presentes?</h4>
            <h1>{nPresentes}</h1>
            <button className='button' onClick={()=> decrementoPresente()}>-</button>
            <button className='button' onClick={()=> incrementoPresente()}>+</button>
        </Square>
        
        <Square color={'#2AA683'} dimensao={300}>
            <Link href={{pathname:'/game',query:{
              portas:nPortas,
              local:nPresentes
            }}} >Iniciar</Link>
        </Square>  
      </div>
    </div>
  )
}
