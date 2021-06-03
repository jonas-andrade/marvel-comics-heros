import React,{ useEffect, useState } from 'react';

export default function ChangeId(){
		  let [count,setCount] = useState(0);
		  
			

 		useEffect(()=>{
 			const btn = document.querySelector("button");
			btn.addEventListener('click',()=>{

				(count === 19) ? setCount(count = 0) : setCount(count += 1)

				if(count <= 19){
					 let cardId = document.querySelectorAll('.card')[count].id
					 document.querySelector('a').setAttribute('href',"#"+cardId)
					
		    		console.log("count :",count," cardId: ",'#'+cardId)
					}

	           })
	      
 			  },[])
		  	
          return(<a href='#'><button>proximo</button></a>)
}