import { Route,Routes } from "react-router-dom";
import Login from "./Login";
import DashBord from "./DashBord";
import Failure from "./Failure";
import { ToastContainer } from 'react-toastify';
const Home =()=>{

    return(
        <>
        <Routes>
            <Route path="/" element={<Login></Login>}/>
            <Route path="/dashboard " element={<DashBord></DashBord>}/>
            <Route path="/failure" element={<Failure></Failure>}/>
        </Routes>
        <ToastContainer></ToastContainer>
        </>
    )
};
export default Home;