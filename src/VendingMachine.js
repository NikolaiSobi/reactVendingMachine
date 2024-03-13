import {React} from "react";
import { Link } from "react-router-dom";


const VendingMachine = () => {
return (
    <div className="VendingMachine">
        <Link to="/snack1">Kit Kat Bar</Link>
        <br></br>
        <Link to="/snack2">Dippin' Dots</Link>
        <br></br>
        <Link to="/snack3">Snickers Bar</Link>
    </div>
)}



export default VendingMachine