import React, { useEffect } from "react";
import darkstyles from '../darkstyles';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    useEffect(() =>{
        if(window['localStorage'] !== null)(
            window.localStorage.getItem('theme') === 'dark'
            ? switchDarkTheme()
            : window.localStorage.setItem('theme', 'light')
        )
    })
        const switchDarkTheme = () =>{
            window.localStorage.setItem('theme', 'dark')
            const style = document.createElement('style')
            document.head.appendChild(style)
            style.innerHTML = darkstyles
        }
        return(
           <> {props.children} </>
            )
}