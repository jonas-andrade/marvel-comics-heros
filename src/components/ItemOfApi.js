import React from 'react'

//component/funcão responsavel por retornar o jsx com os dados completo da api
const ItemOfApi = ({item}) => {

    return (
        <div className='content'>
      <div className='content-inner'>
        <div className='content-front'>
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt='' />
        </div>
        <div className='content-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
          
          </ul>
        </div>
      </div>
    </div>
    )
}

export default ItemOfApi
