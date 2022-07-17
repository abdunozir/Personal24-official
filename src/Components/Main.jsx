import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

function Main() {
    return ( <div>
        <Header />
        <Routes>
            <Route path="/" element="/" ></Route>
        </Routes>
    </div> );
}

export default Main;