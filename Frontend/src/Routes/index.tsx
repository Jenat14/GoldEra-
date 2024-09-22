import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import JewelleryHome from "../Components/JewelleryHome";
import NewUserRegistration from "../Pages/Newreg";
import Ownership from "../Pages/Ownership";
import GoldExchangePage from "../Pages/goldexchange";
import NavbarLayout from "./NavbarLayout";
import BankLayout from "./BankLayout";
import BankHome from "../Pages/BankHome";
import Citizen from "../Pages/citizen";
import HUIDListPage from "../Pages/HuidListPage";
import Purity from "../Pages/Purity";
import LoanForm from "../Pages/LoanForm";
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
                    <Route path="/Exchange" element={<GoldExchangePage />} />
                </Route>
                <Route element={<BankLayout />}>
                    <Route path="/BankHome" element={<BankHome />} />
                    <Route path="/purity" element={<Purity />} />
                    <Route path="/Loan" element={<LoanForm/>}/>
                </Route>
                <Route path="/CitizenLogin" element={<Citizen />} />  
                <Route path="/CitizenHomePage" element={<HUIDListPage name="Jenat" aadhaarId="1234567890" />} /> 
            </Routes>
    );
}