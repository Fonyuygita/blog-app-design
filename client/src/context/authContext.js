import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";


export const AuthContext=createContext();

// create aour function tof wrap our app

export const AuthContextProvider=({children})=>{
    // let us store our user inside our localStorage

    const [currentUser, setCurrentUser]=useState(JSON.parse(localStorage.getItem("user")) || null);

    const login= async (inputs)=>{
        const res=await axios.post("/auth/login", inputs);
        setCurrentUser(res.data);
    }

    const logout=async (inputs)=>{
        await axios.post("/auth/logout");
        setCurrentUser(null);
    }

    // now use useEffect to update user

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])


    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>
    )
}
