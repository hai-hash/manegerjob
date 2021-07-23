import React, { Component } from 'react';
class TextSetting extends Component {
    state = {  }

    setColor(){
        return{
            color: this.props.color,
            borderColor: this.props.color,
            fontSize : this.props.size,
        }
    }
    onSearch = () =>{
        alert("ban đang tìm kiếm sản phẩm với chuỗi thứ tự là " + this.refs.name.value);
       
       }
    render() { 
        return ( 
            <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            
            <div className="panel panel-primary">
                <div className="panel-body">
                  
                  <span className="label">Tìm kiếm</span>
                  <input 
                  type="text" 
                  name="timkiem" 
                  id="inputtimkiem" 
                  className="form-control"  
                  required="required" 
                  title="nhập tên sản phẩm cần tìm kiếm" 
                  ref="name"
                  style={this.setColor()}
                  />
                  
                  
                  <button 
                  type="button" 
                  className="btn" 
                  style={this.setColor()}
                  onClick={this.onSearch}>
                      
                    Search
                    </button>
                  
                  
                </div>
            </div>
            
          </div>
        </div>
            
         );
    }
}
 
export default TextSetting;