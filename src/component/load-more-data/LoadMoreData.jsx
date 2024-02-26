import React, { useEffect, useState } from "react";
import './loadmore.css'

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false)

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count + 20
        }`
      );
      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prev) => [...prev, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(()=>{
    if(products && products.length === 100) setDisableButton(true)
  }, [products])

  if (loading) {
    return <div>loading data please wait...</div>;
  }

  return (
    <div className="load-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : <div>There is an error with API. We are not able to fetch the data from api</div>}
      </div>
      <div>
        <button disabled={disableButton} onClick={()=> setCount(count + 1)} className="button-container bg-blue-700 p-4 rounded text-white hover:bg-black">Load More Products</button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
