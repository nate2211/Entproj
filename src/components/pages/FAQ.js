import React from "react";
import {Points} from "../base/points";


export default function FAQPage(){
    const FAQ = ["1", "2", "3"]
    return(<div>
        <h2>FAQ</h2>
        <Points points={FAQ}/>

    </div>)
}