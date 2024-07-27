import React from "react";
import NavBar from "../NavBar";



export default function Header () {
    return (
        <header className="fixed top-0 left-0 right-0 z-10 flex flex-grow justify-between items-center bg-slate-200 px-4 md:px-8">
        <>   
        <NavBar/>
        </>
        </header>
    )
}
