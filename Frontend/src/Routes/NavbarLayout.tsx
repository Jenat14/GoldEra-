// NavbarLayout.js
import React from 'react';
import Header from '../Components/Header'; 
import { Outlet } from 'react-router-dom'; 

const NavbarLayout = () => {
    return (
        <div>
            <Header name="ABC Jewellery"/>
            <Outlet /> 
        </div>
    );
};

export default NavbarLayout;
