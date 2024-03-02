// //creating a project where 20 product will be displayed 
// //and everytime loadmore is clicked next 20 is showed 
// //while the previous are stored in state
// //and when last of product is reached loadmore button is not shown

// import { useEffect, useState } from "react"


// export default function LoadMore() {

//     const [loading, setLoading] = useState(false);   //to set the state of loading, at initial false
//     const [product, setProduct] = useState([]);      //for displaying the product, initially empty array or list
//     const [count , setCount] = useState(0);   //to keep tab of how many times clicked


//     async function fetchProducts(){
//         try {
//             setLoading(true);
//             const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
//                 count === 0 ? 0 : count * 20}`
//                 );

//             const result = await response.json();
//             if(result && result.product && result.product.length){
//                 setProduct(result.product)
//                 setLoading(false)
//             }
//             console.log(result)
//         }
//         catch(e){
//             console.log(e);
//             setLoading(false);
//         }

//     }

//     useEffect(() =>{
//         fetchProducts();
//     }, []);
    
//     if(loading){
//         <div>Loading data ! Please wait</div>
//     }
    

//     return (
//         <div className="load-more-container">
//             <div className="product-container">
//             {
//                 product && product.length ?
//                 product.map((item) => (
//                 <div className='product' key={item.id}>
//                     <img src={item.thumbnail} alt={item.title}/>
//                     <p>{item.title}</p>
//                 </div>
//                 : null
//                 )
//             }
//                 </div>
                
//             </div>
//             );
    
// }

import { useEffect } from "react";
import { useState } from "react";
import './Style.css'

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}