import React from "react";
import { Link } from "react-router-dom";
const contacts =()=>{
   return(
    <div><div className="ui raised very padded text container segment"
    style={{marginTop:"100px"}}
    >
      <Link to="/card/alex welcome" className="ui header">alex card</Link >
      <p>Lorem ipsum is the series of colors and this is a paragraph</p>
    </div>
    <div className="ui raised very padded text container segment"
    style={{marginTop:"100px"}}
    >
      <Link to="/card/bob welcome" className="ui header">bob card</Link >
      <p>Lorem ipsum is the series of colors and this is a paragraph</p>
    </div></div>
   )
}
export default contacts;