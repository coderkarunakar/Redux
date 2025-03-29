import { Outlet } from "react-router-dom";
import React  from "react";
import NavBar from "./NavBarPanel";
import {Provider} from 'react-redux';
import store from "../store/store";
const RootLayout = () =>{
    //using outlet we can render the child routes inside a parent route.
    return(
        <>

        {/* Always visible */}
        {/*, this Provider gives redux store access to every page this makes store available to all child component to all child components like navbar,dashboard,cart */}
        <Provider store={store}>
            {/* displays a navbar at the top of every page since it is outside outlet */}
        <NavBar/>

        {/* Changes based on URl */}
        <main>
        {/* this is where child routes dashboard,cart are rendered  */}
        {/* if you visit / outlet renders dashboard,/cart means it will render cart route */}
            <Outlet/>
        </main>

        {/* Always visible */}
        </Provider>
        </>
    )
}

export default RootLayout;