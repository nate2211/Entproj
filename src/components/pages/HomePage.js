import {SellerPoints, BuyerPoints} from "../base/points";
import {FancyImage} from "../base/graphics";
import {RequestLocker} from "../base/onclicks";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate()
    return(<div>
        <FancyImage image={"https://images.globalindustrial.com/images/pd/652055GY.jpg?t=1643904344000"}/>
        <div className="base-list">
            <BuyerPoints/>
            <SellerPoints/>
        </div>
        <button onClick={() => RequestLocker(navigate)}>Request Locker</button>
    </div>)
}