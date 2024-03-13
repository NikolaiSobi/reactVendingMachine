import React from "react";
import { Link } from "react-router-dom";

const dippinDotsLink = "https://www.foodandwine.com/thmb/7geHzeDcSqxcy1RZ1gTGFWsp8iU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dippin-dots-fwx-2-8045fd1dfe914d80a3987df0a67522f4.jpg"

const Snack2 = () => {
    return (
        <div>
            <p>
            Click <Link to="/">here</Link> to go back
            </p>
            <img src={dippinDotsLink}/>
        </div>
)}


export default Snack2