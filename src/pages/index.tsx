import * as React from "react"
import '../styles/main.scss'
import {useEffect, useState} from "react";
import {useFetch} from "../api/fetch_hook";
import { SEARCH_URL} from "../api/constants";
// styles



// markup
const IndexPage = (props:any) => {
    let [tag_type,setTagType]= useState("hairstyle")
    let [search_key,setSearchKey]= useState("")
    let {response ,loading}:{response:any,loading:boolean}= useFetch(
        {url:`${ SEARCH_URL }?type=${tag_type}&tag=${search_key}`,options:{} })

    return (
        <main className={"pageStyles"}>
            <title>upload image</title>
            <p>{search_key}</p>
            <img
                alt="Gatsby G Logo"
                src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
            <form className={"form-input"}>
                <label htmlFor="img">Select image:</label>
                <input type="file" id="img" name="img" accept="image/*"/>
                <span>Select tag type</span>
                <select id="cars" name="cars" value={tag_type} onChange={(e)=>setTagType(e.target.value)}>
                    <option value="hairstyle">hair style</option>
                    <option value="makeup">make up</option>
                </select>
                <input type={"text"} placeholder={"styl name"} value={search_key}
                       onChange={(e)=>setSearchKey(e.target.value)}/>
                <ul>
                    {response && response.map((item:any)=>{
                        return <li>{item.name}</li>
                    })}
                </ul>
                <button className={"button"} >
                    upload style
                </button>
            </form>
        </main>
    )
}

export default IndexPage
