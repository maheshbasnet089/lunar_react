import axios from "axios"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"



function Home(){
    const [blog,setBlog] = useState([])
    const fetchBlogs = async ()=>{
       const response =  await axios.get("http://localhost:3000/blog")
        if(response.status === 200){
            // success
            setBlog(response.data.data)
        }else{
            alert("Something went wrong")
        }
    }
    useEffect(()=>{
        fetchBlogs()
    },[])

    return (
        <>
        <Navbar />
        <div className="flex flex-wrap">
            {
                blog.map(function(haha){
                    console.log(haha,"Haha")
                    return (
                     <Card blog={haha}/>
                    )
                })
            }
        </div>
        </>
    )
}

export default Home