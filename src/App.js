
import React,{ useEffect , useState } from 'react';
import GetHero from './GetHero';
import axios from  'axios';
import './style.css';


//dados para obter a requisição correta da api
const ts ='1622325494209'
const baseUrl = 'http://gateway.marvel.com/v1/public/characters'
const apikey='c21f06176bd264935b18146deb090a49'
const hash = 'e2d00036f8687a32c247e8793c5d3007'

// testes --- gerando hash de forma dinâmica ---
// import md5 from 'md5';
// const privkey ='?'
// const hash = md5( ts + privkey + apikey)
// const ts = Number(new Date())


export default function App () {
 const[heros,setHeros] = useState([])

/* °hook do react para efeito colateral -- Busca os dados da api com axios
// °hook do react para estado de valor -- Armazena o array vindo da api
// °executa uma função que vai pegar esse retorno e armazenar na variavel de estado
*/

        useEffect(()=>{
            const fetch = async()=>{
              const res = await axios(`${baseUrl}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
              console.log(res)
              setHeros(res.data.data.results) }
              fetch()
           },[])


// retornando o jsx com os dados json da api como parametro
   return(<main className='main-container'><GetHero heros={heros}  /></main>)} //App










