import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
export default function Navigator(){
    return(
            <Routes>
                <Route path={"/"} element={<HomePage />}></Route>
            </Routes>
    );
}