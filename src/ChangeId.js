import React,{ useEffect, useState } from 'react';

export default function ChangeId(){
		  let [count,setCount] = useState(0);
		  
			const aa = document.createElement('a')

 		useEffect(()=>{
 			const btn = document.querySelector("button");
			btn.addEventListener('click',()=>{
				

			 //    var hashId = document.querySelectorAll('.card')[count].id
				// let ancor = document.querySelector('.card').id = hashId;
				
				// btn.appendChild(aa).href = "#"+ancor
				let cardId = document.querySelectorAll('.card')[count+=1].id

				document.querySelectorAll("a")[0].setAttribute('href',"#"+cardId)


				if(count === 19){setCount(0)}

				// setTimeout(()=>{document.querySelectorAll("a")[0].href = ''},300)
		 		console.log("count :",count," ancor: ",'#'+cardId)


	           })
	      
 			  },[])
		  	
          return(<button><a>proximo</a></button>)
}