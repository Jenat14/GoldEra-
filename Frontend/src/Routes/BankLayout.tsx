// NavbarLayout.js
import React from 'react';
import Header from '../Components/Header'; 
import { Outlet } from 'react-router-dom'; 

const BankLayout = () => {
    return (
        <div>
            <Header name="ABC Bank"/>
            <Outlet /> 
        </div>
    );
};

export default BankLayout;