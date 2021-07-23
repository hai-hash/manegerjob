import React, { Component } from 'react';
class TaskItem extends Component {
    state = {  }
    genColor =(status) =>{
        return status === true ? "badge badge-primary bg-warning" : "badge badge-primary bg-danger"
    }
    geneStatus =(status) =>{
        return status === true ? "Active" : "Hide"
    }
    onHandEdit = () =>{
        var data={
            id : this.props.id,
            job: this.props.job,
            status: this.props.status,
        }
        this.props.onSendEdit(data);
    }
    onUpdateStatus = (value) =>{
        this.props.onUpdateStatus(value);

    }
    onDelete= (id) =>{
        this.props.onDelete(id)
    }
    render() { 
        return ( 
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.job}</td>
                <td><span className={this.genColor(this.props.status)} onClick={() =>this.onUpdateStatus(this.props.id)}>{this.geneStatus(this.props.status)}</span></td>
                <td>
                    
                    <button type="button" className="btn btn-warning" onClick={this.onHandEdit}>Edit</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={()=> this.onDelete(this.props.id)}>Delete</button>
                    
                </td>
            </tr>
         );
    }
}
 
export default TaskItem;