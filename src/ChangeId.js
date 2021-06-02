import React,{ useEffect, useState } from 'react';

export default function ChangeId(){
		  let [count,setCount] = useState(0);
		  let ancor = '';


 				 useEffect((ancor)=>{
 				 	const btn = document.querySelector("button");
					btn.addEventListener('click',()=>{
					setCount(count += 1)
	     		
	     		var hashId = document.querySelectorAll('.hero-img')[count].innerText;
		        ancor = document.querySelector("img").id = hashId;
		     	document.querySelectorAll("a")[0].setAttribute('href',"#"+ancor)
		     	setTimeout(()=>{
		     		document.querySelectorAll("a")[0].href = ''
		     	},300)
 			  	console.log("count :",count," ancor: ",'#'+ancor)


	           })
	      
 			  },[])
		  	
          return(<button><a >proximo</a></button>)
}