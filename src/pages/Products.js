import React, {  useEffect } from "react";
import {add} from '../Store/Slicer';
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Store/ProductSlice";
import { useSelector } from "react-redux";
import { STATUSES } from "../Store/ProductSlice";

const Products = () => {
  // const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  //here we will destructure the data as products, and status bcause it has two property
  const {data:Products, status} = useSelector((state) => state.product)

  // const LoadData = async () => {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const data = await res.json();
  //   setProduct(data);
  // };

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  const handleChange = (stuff) => {
    dispatch(add(stuff));
  }

  if(status === STATUSES.LOADING) {
    return <h1>Loading.....</h1>
  }

  if(status === STATUSES.ERROR) {
    return <h1>Something went wrong</h1>
  }

  
  return (<div className="productsWrapper">
    {
        Products.map(items => (
            <div className="card" key={items.id}>
                <img src={items.image} alt=""/>
                <h4>{items.title}</h4>
                <h5>${items.price}</h5>
                <button className="btn" onClick={() => handleChange(items)}>Add to cart</button>

            </div>

        ) )
    }
  
    

    
  </div>);
};

export default Products;
