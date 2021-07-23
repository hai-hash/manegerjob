import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
    state = { 

        job: "",
        status : -1,
      
     }
    onReceiveEdit = (data) =>{
        this.props.onSendEdit(data);

    }
    onUpdateStatus = (data) =>{
        this.props.onUpdateStatus(data);
    }
    onDelete= (data) =>{
        this.props.onDelete(data);

    }
    onFilter =(event)=>{
        var {job,status} = this.state;
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
        this.props.onFilter(
            name === "job" ? value : job,
            name === "status" ? value : status
        );
    }
    notgen = () =>{
        return <tr><td>không có giá trị</td></tr>
    }
    render() { 
        var { task_list} = this.props;
        var gen = task_list.map((value,index) =>{
           
                return <TaskItem onDelete={this.onDelete} onUpdateStatus = {this.onUpdateStatus} key={index} onSendEdit={this.onReceiveEdit} stt={index} id={value.id} job={value.job} status={value.status}/>
            
        });

        
        return ( 
            
            <div className="row">
                
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trang thái</th>
                            <th>Hàng động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                
                                <input type="text" name="job" id="inputname" className="form-control" onChange={this.onFilter} placeholder="nội dung tìm kiếm" value={this.state.job} />
                                
                            </td>
                            <td>
                                
                                <select name="status" id="inputstatus" className="form-control" onChange={this.onFilter} value={this.state.status}>
                                    <option value={-1}>Tất cả</option>
                                    <option value={1}>Active</option>
                                    <option value={0}>Hide</option>
                                </select>
                                
                            </td>
                            <td></td>
                        </tr>
                        {gen}

                    </tbody>
                </table>
                
            </div>
            
         );
    }
}
 
export default TaskList;