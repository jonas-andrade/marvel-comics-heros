import axios from 'axios'
import React from 'react'
var ts = '1622325494209'
const apikey='c21f06176bd264935b18146deb090a49'
const hash = 'e2d00036f8687a32c247e8793c5d3007'

// https://gateway.marvel.com/v1/public/characters/1010354?ts=1622325494209&apikey=c21f06176bd264935b18146deb090a49&hash=e2d00036f8687a32c247e8793c5d3007

export default async function Main() {
	try{
	const res =  await axios('https://gateway.marvel.com/v1/public/characters?ts=1622325494209&apikey=c21f06176bd264935b18146deb090a49&hash=e2d00036f8687a32c247e8793c5d3007')
	}catch(err){
		console.error(err)
	}
	return (<h1>jonas</h1>)
}