import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios'
import { useEffect } from 'react';
import { setProducts } from '../redux/actions/productActions';



function ProductListing() {

    const products = useSelector((state)=>state)
    console.log("products",products);

    const dispatch = useDispatch()

    const fetchProducts= async()=>{
      const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
        console.log("err",err);

      })
      console.log("output",response.data);
      dispatch(setProducts(response.data))
    }

    useEffect(()=>{
      fetchProducts()
    },[])

  return (
    <div>
      
      <ProductComponent/>
    
    </div>
  )
}

export default ProductListing
