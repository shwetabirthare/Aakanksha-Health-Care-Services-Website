import React from 'react';
/*import {Button, Container,Card,Row,Col} from "react-bootstrap";*/
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import Axios from 'axios';
import { Container,Row,Col,Button } from 'react-bootstrap';
export default class  Products extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
        this.getProduct = this.getProduct.bind(this)
    }
  
    getProduct(category)
    {
        console.log("inside getproduct",category);
        Axios.get('http://localhost:5000/product')
        .then((response)=>
        {
           const updatedItem=response.data.products.filter((item)=>{
                return(
                    item.category === category
                    
                  ); 
            });
            this.setState({
                data: updatedItem,
            });
          
        })
       
    }
   
    componentDidMount() {
        window.addEventListener('load', this.getProduct(this.props.location.state.category));
     }
    
     componentWillUnmount() { 
       window.removeEventListener('load', this.getProduct(this.props.location.state.category))  
     } 
    render()
    {
    
        return(
            <>
                <Popup />
                <Popup1 />
                <Header />
                <Container className="p-5"> 
                    <Row xs={2} md={3} className="g-4">
                        {this.state.data.map((item)=>{
                        return(
                            <div className="shadow-lg p-5 mb-5 bg-white rounded">
                                    <Col>
                                        <div className="text-center"><img className="productImg" src={item.imageUrl} alt="productImage"></img></div>
                                        <div className="text-left"><span>Product Name: {item.name}</span></div>
                                        <div  className="text-left"><span>Description: {item.description}</span></div>
                                        <div  className="text-left"><span>Price: {item.price}$</span></div>
                                        <div className="text-center"><Button variant="primary">Add to Cart</Button></div>
                                </Col>
                            </div>
                        
                            ) ;
                        })}
                    </Row>
                </Container>
                <Footer/>
           </>
        );

    }
}
