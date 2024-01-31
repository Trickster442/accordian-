//Creating it through API

import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"



export default function ImageSlider({url,limit = 5, page = 1}){
    const [image,setImage] = useState([]) ;    //for images
    const [currentSlide, setCurrentSlide] = useState(0);  //for slide
    
    const [errorMsg, setErrorMsg] = useState(null);   //for error handling and displaying error message

    const [loading,setLoading] = useState(false);  //for loading / buffering
    async function fetchImages(getUrl){
    //try catch for error handling
        try {
            //if there are no error
            setLoading(true)
            const response = await fetch(`${getUrl}list?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data){
                setImage(data);
                setLoading(false);
            }
        }catch (e){
            //if there is any error regarding getting the url
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    useEffect(()=>{
        if (url !== "") fetchImages(url)
    },[url]);
console.log(image)

    if (loading){
        return <div>Loading data ! Please Wait</div>
    }
    if (errorMsg !== null){
        return <div>Error occurred ! {errorMsg}</div>
    }

    return <div className="container">
        <BsArrowLeftCircleFill  className=" arrow left-arrow"/>
        {
            image && image.length ?
            image.map((imageItem)=>
            {
                <img
                key={imageItem.id}
                alt = {imageItem.download_url}
                src = {imageItem.download_url}
                className="current-images"
                />
            })
             : null
        }


    </div>
}

