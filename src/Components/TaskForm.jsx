import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
class TaskForm extends Component {
    state = { 
        id: "",
        job : "",
        status : "true",

     }
     componentDidMount(){
        var {data_edit} = this.props;
        this.setState({
            id: data_edit.id,
            job: data_edit.job,
            status: data_edit.status

        });
     }
     componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.data_edit){
            var {data_edit} = nextProps
            this.setState({
                id: data_edit.id,
                job: data_edit.job,
                status: data_edit.status
    
            });

        }
    }
    

    constructor(props){
        super(props);
        this.onHandSubmit = this.onHandSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onHandChange = this.onHandChange.bind(this);


    }
    onHandChange(event){
        var name = event.target.name;
        var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        this.setState({
            [name]: value

        });

    }
    onHandSubmit(event){
        event.preventDefault();
       this.props.onSendSubmitForm(this.state)

    }
    onCancel(value){
        this.props.onsetStatus(value)
    }

    
    render() { 

        
        return ( 
            
                    
               
            
            <div className="panel panel-warning">
                  <div className="panel-heading bg-warning">
                        <h3 className="panel-title">
                            {this.state.id !== "" ?"cập nhật công việc" : "Thêm công việc"}
                        <span className="fas fa-window-close"></span>
        
                        </h3>
                  </div>
                  <div className="panel-body">
                       
                       <form onSubmit={this.onHandSubmit}>
                       
                           <div className="form-group">
                               <label >Tên :</label>
                               <input type="text" className="form-control" name="job" value={this.state.job} onChange={this.onHandChange} placeholder="Tên công việc" />
                           </div>

                           <div className="form-group">
                               <label >Trạng thái :</label>
                               
                               <select name="status" id="inputstatus" className="form-control" required="required" onChange={this.onHandChange} value={this.state.status} >
                                   <option value={true}>Active</option>
                                   <option value={false}>Hide</option>
                               </select>
                               
                           </div>
                           <br/>
                           <br/>
                           
                       
                           
                       
                           <button type="submit" className="btn btn-warning">Save</button>
                           &nbsp;
                           <button className="btn btn-danger" onClick={() => this.onCancel(false)}>Cancel</button>
                       </form>
                       
                  </div>
            </div>

            
            
         );
    }
}
 
export default TaskForm;