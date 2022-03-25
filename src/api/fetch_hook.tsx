import React, {useEffect} from 'react'
import {useState} from "react";

interface IProps{
    url:string
    options?:any
}
export const useFetch=(props:IProps)=>{


    let {options,url}=props
    let [response,setResponse]= useState(null)
    let [loading,setLoading]=useState(true)
    let [error,setError] = useState<any>(null)

    useEffect(()=>{

        (async()=>{
            setLoading(true)

            try {
            let mresponse= await fetch(url,options)

            let json_response = await mresponse.json()
                console.log("hook running :",json_response)
            setResponse(json_response)

            }
            catch (e) {
                setError(e)
            }
            finally {
                setLoading(false)
            }
        })();
    },[url])
    return { response ,loading,error}
}
