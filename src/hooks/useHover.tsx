import React,{ useEffect, useState, useRef, HtmlHTMLAttributes} from "react"

function useHover(){
    const [hovered, setHovered] = useState<boolean>(false)

    const ref = useRef<HTMLElement>(null)

    function enter(){
        setHovered(true)
    }

    function leave(){
        setHovered(false)
    }

    useEffect(() => {

        if(ref.current){
            ref.current.addEventListener("mouseenter", enter)
            ref.current.addEventListener("mouseleave", leave)
        }

        return () => {   
            if(ref.current){
                ref.current.removeEventListener("mouseenter", enter)
                ref.current.removeEventListener("mouseleave", leave)
            } 
        }

    }, [])


    return [hovered, ref]

}

export default useHover