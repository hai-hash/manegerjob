import React, { Component } from 'react';
class Sort extends Component {
    state = { 
        sort:{
            by:'',
            status: 0,
        }
     }

     onSort = (job,status) =>{
         var {sort} = this.state;
         sort.by = job;
         sort.status = status;
         this.setState({
            sort : sort
         });
         this.props.onSort(sort)
     }
     
    render() { 
        var {sort} = this.state;
       
        return ( 
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button 
            type="button" 
            className={sort.status === 1 ? "btn btn-info" : "btn btn-warning"}
            onClick={() =>this.onSort("name",1)}
            >sắp xếp theo tên a - z</button>
            <button 
            type="button" 
            className={sort.status === -1 ? "btn btn-info" : "btn btn-warning"}
            onClick={() =>this.onSort("name",-1)}
            >sắp xếp theo tên z - a</button>      
            </div>
         );
    }
}
 
export default Sort;