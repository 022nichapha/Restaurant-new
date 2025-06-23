import React, { useState, useEffect, Component } from "react";
import Navbar from "../component/nuvbar";

const Add = () => {
  const [restaurant, setRestaurants] = useState({
    title: "",
    type: "",
    img: "",
});
const handleChange = (e)=> {
    const { name ,value} = e.target;
    setRestaurants({...restaurant,[name]: value});
};
return (
    <div className="container mx-auto"
    
)

export default Add;
