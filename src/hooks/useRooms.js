import { useEffect, useState } from "react"

const useRooms=()=>{
    const [rooms,setRooms]=useState([]);
    useEffect(()=>{
        fetch('https://fathomless-peak-01351.herokuapp.com/rooms')
        .then(res=>res.json())
        .then(data=>setRooms(data))
    },[])
    return [rooms,setRooms];
}
export default useRooms;