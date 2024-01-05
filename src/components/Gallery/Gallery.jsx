import axios from "axios";
import { useEffect, useState } from "react";
import "./Gallery.css"
import Photos from "../Photos/Photos";

function Gallery() {

  const [photoCollect,setPhotoCollect]=useState([])

  async function downloadData() {
    let apidata = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20");
   setPhotoCollect(apidata.data.photos)
  }

  useEffect(() => {
    downloadData();
  }, []);

  console.log(photoCollect)
  return (
    
    <div className="parent">
        {photoCollect.map((data) => (
          data?<Photos key={data.id} id={data.id} url={data.url} />:<h1 key="">Server Error</h1>
      ))}
   
    </div>
  );
}

export default Gallery;
