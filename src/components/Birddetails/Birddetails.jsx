import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Birddetails.css"

 function Birddetails(){
    const {id}=useParams()
    const [photos,setPhotos]=useState({})

    async function downloadPhotos(){
        const response=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response.data)
        setPhotos({
            description:response.data.photo.description,
            title:response.data.photo.title,
            url:response.data.photo.url
        })
    }

    useEffect(()=>{
        downloadPhotos()
    },[])
    
      return(
        <div className="parent1">
            <img src={photos.url}/>
            <div className="details">
            <h1 className="title">{photos.title}</h1>
            <p className="description">{photos.description}</p>
            </div>
         
        </div>
      )
 }

 export default Birddetails