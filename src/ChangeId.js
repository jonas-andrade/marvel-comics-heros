
import React,{ useEffect, useState } from 'react';

	export default function 
		ChangeId(){
			  let [count,setCount] = useState(0);

			  	function linkGo(){
	 					(count === 19) ? setCount(count = 0) : setCount(count += 1)
				 		if(count <= 19){
				 			 let cardId = document.querySelectorAll('.card')[count].id
				 			 document.querySelectorAll('a')[0].setAttribute('href',"#"+cardId)
				 			}	
	 			}

	 			function linkBack(){
	 				(count === 0) ? setCount(count = 19) : setCount(count -= 1)
				 		if(count >= 0){
				 			 let cardId = document.querySelectorAll('.card')[count].id
				 			 document.querySelectorAll('a')[1].setAttribute('href',"#"+cardId)
				 			}				
	 			}
			  	
			  
	 		useEffect(()=>{
	 			const green = document.querySelectorAll('button')[0].classList = 'btnGo';
	 			const red = document.querySelectorAll('button')[1].classList = 'btnBack';
	 			document.querySelector('.btnGo').addEventListener('click',linkGo)
	 			document.querySelector('.btnBack').addEventListener('click',linkBack)
		      
	 			  },[])

	 		

	          return(<a href='#'><button></button></a>)
	}