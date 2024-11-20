import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


function Edit(){
  const {id} = useParams() 
  const navigate = useNavigate()
  const [title,setTitle] = useState("")
  const [subtitle,setSubtitle] = useState("")
  const [description,setDescription] = useState("")
  async function editBlog(e){
    e.preventDefault()
    const response = await axios.patch("http://localhost:3000/blog/" +id,{
      title: title, 
      subtitle : subtitle, 
      description : description
    } )
    if(response.status === 200){
      navigate("/single/" + id)
      // navigate(`/single/${id}`)
    }else{
      alert("something went wrong")
    }
  }
    return (
        <>
        <Navbar />
        <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center font-bold">Edit Blog</div>
  <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
  <div className="p-8">
  <form onSubmit={editBlog}>
<div className="flex gap-4">
      <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter title *" onChange={(e)=>setTitle(e.target.value)} />

    </div>
    <div className="flex gap-4">
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter subtitle *" onChange={(e)=>setSubtitle(e.target.value)} />

    </div>
    <div className="">
      <textarea name="description" id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" onChange={(e)=>setDescription(e.target.value)} >Description</textarea>
    </div>
    <div className="text-center">
      <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Edit Blog</button>
    </div>
</form>
  </div>
</div>
        </>
    )
}

export default Edit 