import React from 'react'
// import logo from './img/logo.png'
import Anime from './Anime.js'
//component/funcão responsavel por retornar o jsx com os dados completo da api
const OutputHTML = ({heros}) => {

    return (
              
                <div className='main'>

                <div onClick={Anime} className='hero-img'>
                  <img src={`${heros.thumbnail.path}.${heros.thumbnail.extension}`} alt='' />
                 </div> 

                <div className='hero-desc'>
                    <h1>{heros.name}</h1>
                    <ul>
                      <li>
                        <strong>Name:</strong> {heros.name}
                      </li>
                      <li>
                        <strong>Description:</strong> {heros.description}
                      </li>
                    </ul>
                </div>
                </div>
             
    )}

export default OutputHTML



 


 
 



