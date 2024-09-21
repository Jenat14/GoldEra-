import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import JewelleryHome from "../Components/JewelleryHome";
import NewUserRegistration from "../Pages/Newreg";
import Ownership from "../Pages/Ownership";
import GoldExchangePage from "../Pages/goldexchange";
export default function Navigator(){
    return(
            <Routes>
                <Route path={"/"} element={<HomePage />}></Route>
                <Route path={"/loginJ"} element={<LoginPage usertype="Jewellery" />}></Route>
                <Route path={"/loginB"} element={<LoginPage usertype="Bank" />}></Route>
                <Route path={"/Jewelleryhome"} element={<JewelleryHome />}></Route>
                <Route path={"/registration"} element={<NewUserRegistration />}></Route>
                <Route path={"/transfer"} element={<Ownership />}></Route>
                <Route path={"/Exchange"} element={<GoldExchangePage />}></Route>
            </Routes>
    );
}