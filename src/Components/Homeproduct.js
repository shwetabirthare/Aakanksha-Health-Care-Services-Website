import React, { useState,useEffect } from "react";
import { Button, Col, Container,Row,ButtonGroup,Spinner,Card,ListGroup,ListGroupItem } from "react-bootstrap";
import Axios from "axios"
import { Link} from "react-router-dom";
import { FaSearch} from "react-icons/fa";

const Homeproduct= () => 
{
    const [data,setData]=useState([]);
    const [category,setCategory]=useState();
    const [loading,setloading]=useState(false);
    const [keyword,setKeyword]=useState("");
    const style = { position: "fixed", top: "50%", left: "50%" };
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
      };
    useEffect(()=>{
        getProduct('Nutrition');
    }, [])
    //function to load product 
    const getProduct=(category)=>
    {
        
        Axios.post('http://localhost:5000/product/getProductDetail',{
            category:category
        })
        .then((response)=>
        {
           
           const updatedItem=response.data.products.filter((item)=>{
                return(
                    item.category === category
                    
                  ); 
            }).slice(0,8);
            
            setCategory(category)
            setData(updatedItem);
            setloading(true);
          
        })
       
    }
    //function to search products
    const searchProduct=()=>{
       
       Axios.post('http://localhost:5000/product/searchProducts',
       {
         "searchQuery":keyword,
           "page":1,
           "pageLimit":5
        }).then((response)=>
        {
          setData(response.data.results);
       })
    }
   
    return(
        <div>
            <Container className="p-3">
               <Row xs={1}  md={2}>
                    <Col>   
                        <ButtonGroup className="m-3">
                        <Button variant="secondary" onClick={()=>getProduct('Nutrition')}>Nutritious Products</Button>
                        <Button variant="secondary"  onClick={()=>getProduct('safety')}>Safety Products</Button>
                        <Button variant="secondary"  onClick={()=>getProduct('safety')}>Best Brands</Button>
                        </ButtonGroup>
                    </Col>
                    <Col>
                    <div className="input-group searchbox mt-3">
                            <input type="text" className="form-control w3-animate-zoom" placeholder="Product name, Health Brands" onChange={(e)=>{
                                setKeyword(e.target.value);
                            }}/>
                            <div className="input-group-append">
                                <button className="btn btn-secondary w3-animate-zoom" type="button" onClick={searchProduct}>
                                <FaSearch/>
                                </button>
                            </div>
                    </div>
                    </Col>
                </Row>
                {loading?<Row xs={1} md={3} className="g-4  ">
                    {data.map(item => (
                        <Col sm={12} md={4} lg={3} xl={3}>
                            <Card className="my-3 p-3 rounded m-3">
                                <Card.Img src={item.imageUrl} alt="productImage" variant="top"/>
                                <ListGroup variant="flush">
                                    <ListGroupItem>
                                        <div className="productname"><span>{item.name}</span></div>
                                   </ListGroupItem>
                                
                                    <ListGroupItem>
                                    <div className="productprice">Price:<strong>{item.price}$</strong></div>
                                    </ListGroupItem>
                                </ListGroup>
                                
                                
                            </Card>
                        </Col>
                        
                    ))}
                </Row>:<Spinner animation="border" style={style}/>}
                <Row className="p-5 text-center">
                    <Col>
                        <Link to={{
                            pathname:"/products",
                            state:{
                                category:category
                            }
                            
                        }}>
                            <Button 
                               className="seemore1">
                                <p>View All</p>
                             
                            </Button>
                        </Link >
                   </Col>
                </Row>
            </Container>
        </div>
    );


}
export default  Homeproduct;