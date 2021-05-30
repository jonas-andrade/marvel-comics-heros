import React,{ useEffect } from 'react';
import axios from  'axios'
import md5 from 'md5';
 
const apikey='c21f06176bd264935b18146deb090a49'

const ts = Number(new Date())
const hash = md5( ts + privkey + apikey)
const baseUrl = 'http://gateway.marvel.com/v1/public/characters'

export default function App () {
  useEffect(()=>{
    axios.get(`${baseUrl}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
    .then(res => console.log(res.data))
    .catch(e => console.error(e))},[])
  
    return (  
             <>
             {

             
             }
             <h1>Testando API da Marvel ...</h1>
             </>
           )

} //App


