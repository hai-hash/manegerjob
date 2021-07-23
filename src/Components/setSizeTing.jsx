import React, { Component } from 'react';
class SetSize extends Component {
    state = {  }
    setSize =(value) =>{
        this.props.onsetSize(value)
    }
    render() { 
        return ( 
            
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    
                    <span className="label label-danger">{this.props.size}</span>
                    
                    
                    <ul className="pager">
                        
                        <button type="button" className="btn btn-danger" onClick={() => this.setSize(-2)}>reduction</button>
                      
                        
                        <button type="button" className="btn btn-primary"  onClick={() => this.setSize(2)}>increase</button>
                        
                    </ul>
                    
                    
                </div>
            </div>
            
         );
    }
}
 
export default SetSize;