
import './App.css';
import Menu from './Components/menu';
import Product from './Components/product';
import Colorsetting from './Components/Colorsetting';
import TextSetting from './Components/textSetting';
import React, { Component } from 'react';
import SetSize from './Components/setSizeTing';
import Form from './Components/form';
class App extends Component{
  
  
  state = {
    color : "red",
    size : 20,
    products : [
      {
        id : 1,
        nameProduct : "quần short 1 cm",
        priceProduct : 100000,
        color : 'black',
        urlImage : "https://product.hstatic.net/1000360022/product/2_0790d39bc1b24fb494cf2923d7cfc34c_master.jpg",
        status : true,
        detail : "sản phẩm này rất là tuyệt vời 1"
      },
      {
        id : 2,
        nameProduct : "quần short 2 cm",
        priceProduct : 200000,
        color : 'blue',
        urlImage : "https://cf.shopee.vn/file/487ade9f502b30936ee2a111cf7d685f",
        status : true,
        detail : "sản phẩm này rất là tuyệt vời 2"
      },
      {
        id : 3,
        nameProduct : "quần short 3 cm",
        priceProduct : 300000,
        color : 'pink',
        urlImage: "https://onoff.vn/blog/wp-content/uploads/2019/03/Qu%E1%BA%A7n-short-nam-kaki.jpg",
        status : true,
        detail : "sản phẩm này rất là tuyệt vời 3"
      }
    ]
  }

  

  renderClassCols = () =>{
    return "col-xs-4 col-sm-4 col-md-4 col-lg-4";
  }
  buyProduct(){
    alert("chúc mừng, bạn đã mua hàng thành công");
  }

renderProduct = () =>{
      let result = this.state.products.map(product => {
        let result1 = product.status ? <div className={this.renderClassCols()} key={product.id}>
        <Product colo={this.state.color} id ={product.id} nameProduct={product.nameProduct} price={product.priceProduct} color={product.color} urlImage={product.urlImage} detail={product.detail}>
          
        </Product>
    </div> : '';
    return result1
      
  });

  return result;
}



receiveColor = (param) =>{
  this.setState({
    color: param,
  });
}

receiveSize =(value) =>{
  this.setState({
    size : this.state.size + value,
  });
}
  
  render(){
    return (
      <div>
        <Menu color={this.state.color} />
        <Colorsetting color={this.state.color} onSetColor={this.receiveColor}/>
        <TextSetting color={this.state.color} size={this.state.size} />
        <Form color={this.state.color}/>
        
        <div className="row">
        {this.renderProduct()}
        
        </div>
        
        
       
      

       <SetSize size={this.state.size} onsetSize={this.receiveSize}/>
     
      </div>
    );

  };
  
};

export default App;
