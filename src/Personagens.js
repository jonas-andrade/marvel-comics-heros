
import ItemOfApi from './components/ItemOfApi'

// envio da função responsavel por retornar os personagens com base no parametro recebido
export default function Personagens ({items}){
	
	
     return (
		   
     	    <section className="contents">
        {//percorrendo os dados da api
           		 items.map(item=>(
                <ItemOfApi key={item.id} item={item}></ItemOfApi>
            ))
        }
    </section>


  )} //Personagens















