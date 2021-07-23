import React, { Component } from 'react';
class Product extends Component {
    state = { 
        colors : ['black','red','white','pink','yellow'],
        count : 1
     }
     setColor(){
        return{
            color: this.props.colo,
            borderColor: this.props.colo,
           
        }
    }

    renderColor = () =>{
        return <ul>
            {this.state.colors.map(color =><li key={color}>{color}</li>)}
        </ul>

    }

    increase = () =>{
        this.setState({
            count: this.state.count + 1
        });
    }
    reduction = () =>{
        this.setState({
            count : this.state.count === 1 ? 1 : this.state.count - 1,
        });
    }

    eventBuy = () =>{
        document.getElementById(this.props.id).innerText = this.props.detail;
        alert("bạn đa mua " + this.props.nameProduct + " " + this.state.count + "chiếc với giá " + this.props.price  + "vnđ  thành công");
       
    }
    render() { 
        return ( 
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img width="500" height="500" src={this.props.urlImage} alt="quần short" />
                        <div className="caption">
                            <h3>{this.props.nameProduct}</h3>
                            <p>
                                Price : {this.props.price} Vnđ.
                            </p>
                            
                            <p>count: <label className="text-primary">{this.state.count}</label></p>
                            
                            
                            <p id ={this.props.id}></p>
                            <div>
                                <h3>Color : {this.props.color}</h3>
                                
                            </div>
                            <div>
                                
                                <button type="button" className="btn" style={this.setColor()} onClick={this.reduction}>Reduction</button>
                                <button type="button" className="btn " style={this.setColor()} onClick={this.increase}>Increase</button>
                                
                            </div>
                            <p>
                                
                                
                                <button type="button" className="btn" style={this.setColor()} onClick={this.eventBuy}>Mua hàng ngay</button>
                                
                            </p>
                        </div>
                    </div>
                </div>
                
                


            </div>
         );
    }
}
 
export default Product;