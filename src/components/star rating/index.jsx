import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './styles.css';

export default function StarRating({noOfStars = 5}){
    //passing noOfStars as properties which by default will be 5

    const [rating,setRating] = useState(0);        //this state is for rating which at first is 0
    const [hover, setHover] = useState(0);         //this state is for hover which will display css when hovered


    function handleClick(getCurrentId){
        //creating an function which will take the current id as argument
        console.log(getCurrentId);
        setRating(getCurrentId);
    }

    function handleHover(getCurrentId){
        //creating a function that will take index when hovered
        console.log(getCurrentId);
        setHover(getCurrentId);


    }
    function handleMouseLeave(){
        //this function was to keep track of mouse leaving the rating site
        // as it need to leave the last mouse track as where rating was done so no arg is passed setting hover to rating
        
        setHover(rating);
    }
    return (
        <div className="star-rating">
            {
            [...Array(noOfStars)].map((_,index) =>{
                index += 1
                return <FaStar
                key={index}                                      //using index as a key
                className={index<= (hover || rating) ? 'active' : 'inactive'}
                onClick={()=>handleClick(index)}                                       //onClick it will lock to correspond star and provide some css
                onMouseMove={()=>handleHover(index)}                                   // for mouse hover 
                onMouseLeave={()=>handleMouseLeave()}
                size={40}
                />
            } )
        }
        </div>
    )
}