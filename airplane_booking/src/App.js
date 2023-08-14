import './App.css';
import React from "react";
import {Login} from "./components/account/Login";
import {Route, Routes} from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import {SignUp} from "./components/account/SignUp";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
            </Routes>
        </>
    );
}

export default App;
