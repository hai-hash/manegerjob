import React, { Component } from 'react';
import Sort from './Sort';
import Search from './Search';
class Controller extends Component {
    state = {  }
    constructor(props){
        super(props);
        this.receiveSearch = this.receiveSearch.bind(this);
    }
    receiveSearch(value){
        this.props.onSendSearch(value);

    }
    onSort =(data)=>{
        this.props.onSort(data);
    }
    render() { 
        return ( 
            
            <div className="row">
                <Search sendSearch = {this.receiveSearch}/>
                <Sort onSort = {this.onSort}/>         
            </div>
            
            
            
         );
    }
}
 
export default Controller;