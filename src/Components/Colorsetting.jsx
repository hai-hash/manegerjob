import React, { Component } from 'react';
class Colorsetting extends Component {
    state = { 
        colors:['red','blue','green','pink','gray']
     }
     constructor(props){
         super(props);
         this.active = this.active.bind(this);
     }
     

     setBackgound(color){
         return {
             backgroundColor: color,
             with: 100,
             

         }
        
     }
     active (color){
         return this.props.color === color  ? "border border-dark" : ''
     }

     setActive(color){
        this.props.onSetColor(color);
     }
    
    render() { 
        var renderColor = this.state.colors.map((color,index) =>{
            return <span 
            key={index} 
            style={this.setBackgound(color)}
            className={this.active(color)}
            onClick ={() =>this.setActive(color)}
            >
                color

            </span>
        });
        return ( 
            <div>
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <span>
                          {renderColor}

                      </span>
                  </div>
              </div>
              
                
            </div>
         );
    }
}
 
export default Colorsetting;