import { Outlet } from "react-router-dom";
import React  from "react";
const RootLayout = () =>{
    //using outlet we can render the child routes inside a parent route.
    return(
        <>
        <h1>Navigation</h1>
        <main>
        
            <Outlet/>
        </main>
        </>
    )
}

export default RootLayout;