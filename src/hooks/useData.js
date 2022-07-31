import { useState } from "react";

const useData=()=>{
    const [services,setServices]=useState([]);
    fetch('https://fathomless-peak-01351.herokuapp.com/services')
    .then(res=>res.json())
    .then(data=>setServices(data));
    return [services];
}
export default useData;