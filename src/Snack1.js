import React from "react";
import {Link } from "react-router-dom";

const kitKatLink = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGo1aXA4Nzh4Y3VueXNzaGpxeGg0NWoyeDd1NzFnbmtodnlvNGN4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0ExiIVrgmhtUUOfS/giphy.gif"

const Snack1 = () => {
    return (
        <div>
            <p>
            Click <Link to="/">here</Link> to go back
            </p>
            <img src={kitKatLink}/>
        </div>
)}


export default Snack1