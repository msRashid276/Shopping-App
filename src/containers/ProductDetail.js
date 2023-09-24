import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions';
import { Col, Row , Image } from 'react-bootstrap';



function ProductDetail() {

  const {productId}= useParams()  
  console.log("productId",productId);
  const dispatch = useDispatch()
  const product = useSelector((state)=>state.product)
  console.log("selectedProduct",product);
  const {id, title,price, description,category, image} = product

  const fetchOneProduct = async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
      console.log("err",err);
    })
    dispatch(selectedProduct(response.data))

  }

useEffect(()=>{
  if(productId && productId !=="" ) fetchOneProduct();
 return ()=>{
  dispatch(removeSelectedProduct())
 }
  
},[productId])


  return (
    <div className='container'>
      {Object.keys(product).length === 0 ? (
         <div>...loading</div>
      ):(
        <Row>
          <Col sm={12} md={12} lg={8} xl={6}>
            <Image src={image} style={{width:"500px",height:"500px"}}/>
          </Col>
          <Col sm={12} lg={4} xl={4}>
              <h3>{title}</h3>
              <h4>{description}</h4>
              <h4>{price}</h4>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default ProductDetail
