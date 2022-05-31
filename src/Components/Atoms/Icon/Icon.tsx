import React from "react";
import { ReactSVG } from 'react-svg';


export type iconProps=
{
imageSrc:string;
classname?:any;

}

const Icon = (props:iconProps)=> {

    const { imageSrc, classname }= props

    return(
        <ReactSVG {...props} src={imageSrc} className={classname}/>
    )
}

export default Icon;