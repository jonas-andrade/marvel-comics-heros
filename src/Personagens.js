import React,{ useEffect , useState } from 'react';
// import axios from  'axios'
import md5 from 'md5';


const apikey='c21f06176bd264935b18146deb090a49'
const privkey ='d85a7b45c644c177319e8a2d63fb73e43a3b3a28'
const ts = Number(new Date())
const hash = md5( ts + privkey + apikey)
const baseUrl = 'http://gateway.marvel.com/v1/public/characters'




export default function Personagens (){
	
	 const [ hero ,setHero ]= useState({})
	 

		useEffect(() =>{
			 getOfApi()
			
		},[])

	async function getOfApi(){
		const res = await fetch(`${baseUrl}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
		const ObjectOfApi = await res.json()
		setHero(ObjectOfApi)
	}



            
		return (<>{

			<ul className="heroList">
          {hero.data.results.map((heros) => (
            <li key={heros.id}>
              <img
                src={`${heros.thumbnail.path}.${heros.thumbnail.extension}`}
                alt={heros.name}
              />
              {heros.name}
            </li>
          ))}
        </ul>


		}</>)} //Personagens






















// useEffect(()=>{axios.get(`${baseUrl}?ts=${ts}&apikey=${apikey}&hash=${hash}`).then((response) => {setHero(response.data.data.results)console.log(hero)}).catch(e => console.error(e))},[])userEffect 
   	