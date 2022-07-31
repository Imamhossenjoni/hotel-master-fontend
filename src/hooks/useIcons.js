import { useEffect, useState } from "react"

const useIcons=()=>{
    const [icons,setIcons]=useState([]);
    useEffect(()=>{
        fetch('icons.json')
        .then(res=>res.json())
        .then(data=>setIcons(data))
    },[])
    return [icons,setIcons];
}
export default useIcons;