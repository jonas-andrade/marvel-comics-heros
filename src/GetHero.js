import React from 'react'
import OutputHTML from './OutputHTML'

// envio da função responsavel por retornar os personagens com base no parametro recebido
export default function GetHero ({heros}){
	
	
     return (
     	    <section className="loop-container">
                    {heros.map(item=>(
                      <OutputHTML key={item.id} heros={item}></OutputHTML>
                    ))}
            </section>
  )} //getHero















