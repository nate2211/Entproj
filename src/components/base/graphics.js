import React from "react";
import "./styles/graphics.css"


export function FancyImage({image}){


    return(<div className={"fancyImage"}>
        <img src={image} alt={"fancyImage"} className="bigImage"/>
        <div className="text-overlay">
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
    </div>)
}