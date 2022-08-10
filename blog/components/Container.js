import Link from "next/link";
import Navbar from "./Navbar";
import React from 'react';

const Container = ({children}) => {
    return (
        <>
         <Navbar/>   
         {children}
        </>
    );
}

export default Container;
