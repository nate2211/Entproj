import React from "react";


export function BuyerPoints()  {
    const points = [
        "1",
        "2",
        "3"
    ]
    return(<div className="base-background">
        <h2>Buyer Steps</h2>
        <Points points={points}/>

    </div>)
}

export function SellerPoints() {
    const points = [
        "1",
        "2",
        "3",
    ]
    return(<div className="base-background">
        <h2>Seller Steps</h2>
        <Points points={points}/>
    </div>)

}
export function Points({points}){

    return( <ul className="base-vlist">
        {points.map((point, i) => (
            <li key={i}>{point}</li>
        ))}
    </ul>)
}