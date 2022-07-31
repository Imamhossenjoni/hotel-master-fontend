import { useEffect, useState } from "react"

const useImages=()=>{
    const [images,setImages]=useState([]);
    useEffect(()=>{
        fetch('images.json')
        .then(res=>res.json())
        .then(data=>setImages(data));
    },[])
    return [images,setImages];
}
export default useImages;