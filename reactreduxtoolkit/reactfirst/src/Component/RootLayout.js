import { Outlet } from "react-router-dom";
import React  from "react";
import NavBar from "./NavBarPanel";
import {Provider} from 'react-redux';
import store from "../store/store";
const RootLayout = () =>{
    //using outlet we can render the child routes inside a parent route.
    return(
        <>
        <Provider store={store}>
        <NavBar/>
        <main>
        
            <Outlet/>
        </main>
        </Provider>
        </>
    )
}

export default RootLayout;