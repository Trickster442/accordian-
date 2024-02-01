// //Creating it through API

// import { useEffect, useState } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import "./styles.css"

// export default function ImageSlider({ url, limit = 5, page = 1 }) {
//   const [images, setImages] = useState([]); //for images
//   const [currentSlide, setCurrentSlide] = useState(0); //for slide

//   const [errorMsg, setErrorMsg] = useState(null); //for error handling and displaying error message

//   const [loading, setLoading] = useState(false); //for loading / buffering
//   async function fetchImages(getUrl) {
//     //try catch for error handling
//     try {
//       //if there are no error
//       setLoading(true);
//       const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
//       const data = await response.json();

//       if (data) {
//         setImages(data);
//         setLoading(false);
//       }
//     } catch (e) {
//       //if there is any error regarding getting the url
//       setErrorMsg(e.message);
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     if (url !== "") fetchImages(url);
//   }, [url]);

//   console.log(images);

//   if (loading) {
//     return <div>Loading data ! Please Wait</div>;
//   }
//   if (errorMsg !== null) {
//     return <div>Error occurred ! {errorMsg}</div>;
//   }

//   function handlePrevious(){
//     setCurrentSlide(currentSlide === 0 ? 
//         images.length -1 : currentSlide - 1 )  
//         //it will make sure that if you are at end or beginning and click prev then it take to last or first and if not at last or first then takes to previous 
//    }

//   function handleNext(){
//     setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide + 1);

//   }

//   return (
//     <div className="container">
//       <BsArrowLeftCircleFill onClick={handlePrevious} className="left-arrow arrow" />
//       {images && images.length
//         ? images.map((imageItem, index) => {
//             <img
//               key={imageItem.id}
//               alt={imageItem.download_url}
//               src={imageItem.download_url}
//               className={currentSlide === index ? "current-images" : "current-images hide-current-images" }
//             />;
//           })
//         : null}
//       <BsArrowRightCircleFill onClick={handleNext} className="right-arrow arrow"/>
//       <span className="circle-indicators">
//         {images && images.length
//           ? images.map((_, index) => (
//               <button key={index} className={
//                 currentSlide === index ? "current-indicator" : 
//                 "current-indicator inactive-indicator"
//               }
//               onClick={()=> setCurrentSlide(index)}></button>
//             ))
//           : null}
//       </span>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow left-arrow"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow right-arrow"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}