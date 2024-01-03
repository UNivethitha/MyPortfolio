import React, { memo }from "react";

export const Hello = (props) =>{

    console.log("re_rendering");

    return(
    <div>
        {props.fname}{props.lname}

    </div>
    )
}
export default memo(Hello)