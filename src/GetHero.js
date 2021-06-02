import React from 'react'
import OutputHTML from './OutputHTML'

// envio da função responsavel por retornar os personagens com base no parametro recebido
export default function GetHero ({all}){
	
	
     return (
     	    <section className="loop-container">
                    {all.map(elements=>(
                      <OutputHTML key={elements.id} items={elements}></OutputHTML>
                    ))}
            </section>
  )} //getHero















