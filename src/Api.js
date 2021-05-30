// import axios from 'axios';
// http://gateway.marvel.com/v1/public/comics (url base)

//?ts=1622269903 ( time stemp)

//&apikey=c21f06176bd264935b18146deb090a49 (api ou apikey)
 
//&hash=e894ff8312903e6d8dc36fba1a84b9c8   (md5 de ts+key_privada+key_publica)
import md5 from 'blueimp-md5';
export default function  Api() {
	
	const key_pub = "c21f06176bd264935b18146deb090a49"
	const key_priv = "d85a7b45c644c177319e8a2d63fb73e43a3b3a28" 
	const ts = Date.now().toString();
	const merge = ts + key_pub + key_priv
	const hash =  md5(merge)
	return (
		
		<>
		<h1>{hash}</h1>
		</>
	)
}

// function getPersongens() {
// 	const ts = Date.now().toString();
// 	const hash = getHash(ts)
// 	const url = "http://gateway.marvel.com/v1/public/characters?ts="+ts+"&apikey="+key_pub+"&hash="+hash;

 
// }