import React,{createContext, useState} from 'react'
import { Component2 } from './Component2'

export const Usercontext = createContext();

export const Component1 =() =>{
    const[user, setUser] = useState("Nive")

    return(
        <Usercontext.Provider value={user}>
            <div>
                <h2>Component1</h2>
                <Component2/>
            </div>
        </Usercontext.Provider>
    )
}
