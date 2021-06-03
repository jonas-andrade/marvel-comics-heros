import React,{ useEffect, useState  } from 'react';

export default function ChangeId(){
	let [count,setCount] = useState(0);
			
 		useEffect(()=>{
				 	const btnGO = document.querySelectorAll("button")[0]
				 	btnGO.addEventListener('click',()=>{
						(count === 19) ? setCount(count = 0) : setCount(count += 1);
						if(count <= 19){
							 let cardId = document.querySelectorAll('.card')[count].id
							 document.querySelector('a').setAttribute('href',"#"+cardId)
							}
					})
 			

 				
 		},[])

 				
		  	
          return(<a href='#'><button></button></a>)}