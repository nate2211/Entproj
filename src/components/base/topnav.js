import React from "react";
import "./styles/topnav.css";
import * as ROUTES from "../../ROUTES";
import {Link} from "react-router-dom";

export default function TopNav(){
    const Navs = ["MojoLockers", "About", "FAQ"]
    return(
        <div className="nav">
            <ul className="base-list navlist">
                <li className="nav-header"><Link to={ROUTES.LANDING} className="base-link">{Navs[0]}</Link></li>
                {Navs.slice(1, Navs.length).map((nav, i) => (
                    <li key={i} className={"nav-subheader"}><Link to={nav}>{nav}</Link></li>
                ))}

            </ul>

    </div>)
}