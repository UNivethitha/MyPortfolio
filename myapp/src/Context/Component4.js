import React, {useContext} from 'react';
import { Usercontext } from './Component1';

export const Component4 =() =>{

    const user = useContext(Usercontext)
    return(
        <div>
                <h2>Component4{user}</h2>
                
        </div>
    )
}