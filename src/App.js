
import './App.css';
import {Route, Routes} from "react-router-dom";
import TopNav from "./components/base/topnav";
import "./components/base/styles/base.css";
import HomePage from "./components/pages/HomePage";
import * as ROUTES from "./ROUTES"
import AboutPage from "./components/pages/About";
import FAQPage from "./components/pages/FAQ";
import LockerRequest from "./components/pages/LockerRequest";
import LockerRequestPage from "./components/pages/LockerRequest";
function App() {
  return (
    <div className="App">
        <TopNav/>
        <Routes>
            <Route exact path={ROUTES.LANDING} element={<HomePage/>}/>
            <Route exact path={ROUTES.ABOUT} element={<AboutPage/>}/>
            <Route exact path={ROUTES.FAQ} element={<FAQPage/>}/>
            <Route exact path={ROUTES.LOCKERREQUEST} element={<LockerRequestPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
