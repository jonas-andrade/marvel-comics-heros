import React from 'react'


//component/funcão responsavel por retornar o jsx com os dados completo da api
const OutputHTML = ({items}) => {
    
    return (
              
              
                <div className='main' >

                <div  className='card' id={items.id}>
                  <img src={`${items.thumbnail.path}.${items.thumbnail.extension}`} alt=''  />
                    <h1 className='marvel'>MARVEL</h1>
                    <div className='hero-desc'>
                    <h1>{items.name}</h1>
                    <ul>
                      <li>
                        <strong>Name:</strong> {items.name}
                      </li>
                      <li>
                        <strong>Description:</strong> {items.description}
                      </li>
                    </ul>
                </div>
                 </div> 
                
                
                </div>
             
      )}

export default OutputHTML



 


 
 



