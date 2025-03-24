import { Outlet } from "react-router-dom";
import React  from "react";
import NavBar from "./NavBarPanel";
const RootLayout = () =>{
    //using outlet we can render the child routes inside a parent route.
    return(
        <>
        <NavBar/>
        <main>
        
            <Outlet/>
        </main>
        </>
    )
}

export default RootLayout;