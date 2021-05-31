
import React,{ useEffect , useState } from 'react';
import Header from './components/Header'
import Personagens from './Personagens'
import axios from  'axios'
import './style.css'


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
 const[items,setItems] = useState([])

// hook do react para efeito colateral -- in onload busca os dados com axios
        useEffect(()=>{
            const fetch = async()=>{
              
                const result = await axios(`${baseUrl}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
                console.log(result.data.data.results)
                setItems(result.data.data.results)   
          }

          fetch()
        },[])

// retornando o jsx com os dados json da api como parametro
   return(

         <div className="container">
          <Header />
          <Personagens items={items}  />
        </div>


   )} //App










