import Header from '../Components/Header'; 
import { Outlet } from 'react-router-dom'; 

const BISLayout = () => {
    return (
        <div>
            <Header name="BIS"/>
            <Outlet /> 
        </div>
    );
};

export default BISLayout;
