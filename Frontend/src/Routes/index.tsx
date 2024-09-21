import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import JewelleryHome from "../Components/JewelleryHome";
import NewUserRegistration from "../Pages/Newreg";
import Ownership from "../Pages/Ownership";
import GoldExchangePage from "../Pages/goldexchange";
import NavbarLayout from "./NavbarLayout";
export default function Navigator(){
    return(
            <Routes>
                <Route path={"/"} element={<HomePage />}></Route>
                <Route path={"/loginJ"} element={<LoginPage usertype="Jewellery" />}></Route>
                <Route path={"/loginB"} element={<LoginPage usertype="Bank" />}></Route>
                <Route element={<NavbarLayout />}>
                    <Route path="/Jewelleryhome" element={<JewelleryHome />} />
                    <Route path="/registration" element={<NewUserRegistration />} />
                    <Route path="/transfer" element={<Ownership />} />
                    <Route path="/Exchange" element={<GoldExchangePage />
                } />
            </Route>
            </Routes>
    );
}