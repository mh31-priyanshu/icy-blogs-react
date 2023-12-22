import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState(null)
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(()=>
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data from the server...'); 
                }
                return res.json();
            })
            .then(data =>{
                setData(data);
                setisPending(false);
                setError(null);
            })
            .catch(err => {
                setisPending(false);
                setError(err.message)
            })
        ,500)
    }, [])
    return {data,isPending,error}
}

export default useFetch;