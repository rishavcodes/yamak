import React from 'react'
import Topbuttons from "./topbuttons"
import CardData from "./CardData"
import Cards from "./Cards"
import "./body.css"

function cardDis(CardData){
  return (
    <Cards 
    img={CardData.imageURL}
    name={CardData.name}
    description={CardData.description}
    buttonName={CardData.buttonName}
    />
  )
}

function Body() {
  return (
    <div style={{marginLeft:"50px"}}>
    <Topbuttons/>
    {CardData.map(cardDis)}
    </div>
  )
}

export default Body