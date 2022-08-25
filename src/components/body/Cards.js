import React from 'react'
import Avatar from "./Avatar"
import {Card} from "react-bootstrap"




function Cards(props) {
  return (
    <div className="App" style={{display:"inline-grid", textAlign:"center", paddingTop:"20px", marginLeft:"10px"}}>
    <Card className="lg-9" style={{width:"12rem", height:"202px"}}>
        <Avatar img={props.imageURL}/>
        <h2 style={{fontSize:"1.3rem"}}>{props.name}</h2>
        <p style={{fontSize:"1rem"}}>{props.description}</p>
        <button style={{width:"9rem", margin:"auto", borderRadius:"5px", backgroundColor:"#0188F3", color:"#fff", border:"none"}}>{props.buttonName}</button>
    </Card>
    </div>
  )
}

export default Cards