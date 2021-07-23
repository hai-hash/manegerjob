import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Controller from './Controller';
import TaskList from './TaskList';
class ManageJob extends Component {
    state = { 
        task_list : [],
        isStatusForm: false,
        data_edit :{
            id :"",
            job : "",
            status : true,
        },
        filter : {
            job:"",
            status: -1,

        },
        sort :{
            by : '',
            status: 0,
        }
     }
    constructor(props){
        super(props);
        this.s4 = this.s4.bind(this);
        this.randomData = this.randomData.bind(this);
        this.geneData = this.geneData.bind(this);
        this.display = this.display.bind(this);
        this.geneColum = this.geneColum.bind(this)
        this.onHandStatusForm = this.onHandStatusForm.bind(this)
        this.onReceiveSearch = this.onReceiveSearch.bind(this);
        this.geneColumForm = this.geneColumForm.bind(this);
        
        
    }
    onHandStatusForm(){
        if(this.state.isStatusForm && this.state.data_edit.id !== ""){
            this.setState({
                isStatusForm : true,
                data_edit :{
                    id :"",
                    job : "",
                    status : true,
                },
            });
        }
        else{
            this.setState({
                isStatusForm : !this.state.isStatusForm,
                data_edit :{
                    id :"",
                    job : "",
                    status : true,
                },
            });

        }
        
    }
    receiveStatus =(value) =>{
        this.setState({
            isStatusForm : value
        });
    }
    onReceiveSubmitForm =(data) =>{
        var {task_list} = this.state;
        if(data.id === ""){
        data.id = this.randomData();
        data.status = data.status === 'false'? false : true;
        task_list.push(data);
    }
    else{
        var index = this.findIndex(data.id)
        task_list[index].job = data.job;
        task_list[index].status = data.status;
    }
    this.setState({
        task_list: task_list,
    });
    localStorage.setItem("task_list",JSON.stringify(task_list));
    }


    display(value){
        return value === true ? <TaskForm data_edit={this.state.data_edit} onSendSubmitForm={this.onReceiveSubmitForm}  onsetStatus={this.receiveStatus}/> : ""
    }

    geneColum(value){
        return value === true ?  "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
    }

    geneColumForm(value){
        return value === true ?  "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
    }

    componentDidMount(){
        if(localStorage && localStorage.getItem("task_list")){
            this.setState({
                task_list : JSON.parse(localStorage.getItem("task_list"))
            });
        }
    }

    s4(){
        return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
    }

    randomData(){
        return this.s4() + "_" + this.s4() + "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()
        + "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()
        + "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()
        + "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()+ "_" + this.s4()
    }
    geneData(){
        var task_list = [
            {
                id: this.randomData(),
                job: "học lập trình agular",
                status: true
            },
            {
                id: this.randomData(),
                job: "học lập trình reactjs",
                status: true
            },
            {
                id: this.randomData(),
                job: "học lập trình redux",
                status: true
            },
            {
                id: this.randomData(),
                job: "học lập trình web",
                status: false
            },
        ];
        localStorage.setItem("task_list",JSON.stringify(task_list));
    }
    onReceiveSearch(value){
        var {filter} = this.state;
        filter.job = value;
        filter.status = -1;
        this.setState({
           filter: filter
        });
    }
    onReceiveEdit= (data) =>{
        
        this.setState({
            isStatusForm: true,
            data_edit: data,
        });
    }
    onUpdateStatus= (id) =>{
        var {task_list} = this.state;
        var index = this.findIndex(id);
        task_list[index].status = !task_list[index].status;

        this.setState({
            task_list :task_list,
        });

        localStorage.setItem("task_list",JSON.stringify(task_list));

    }
    findIndex = (id) =>{
        var {task_list} = this.state;
        var result = -1;
        task_list.forEach((task,index) => {
            if(task.id === id) result = index;
        });

        return result;
    }
    onDelete = (id) =>{
        var {task_list} = this.state;
        var index = this.findIndex(id);
        task_list.splice(index,1);
        
        this.setState({
            task_list :task_list,
        });

        localStorage.setItem("task_list",JSON.stringify(task_list));

    }
    onFilter= (job,status) =>{
        var {filter} = this.state;
        filter.job = job.toLowerCase();
        filter.status = parseInt(status);
       this.setState({
           filter : filter
       });
    }
    onSort = (data) =>{
        var {sort} = this.state;
        sort = data;
      
        this.setState({
            sort : sort
        });
    }
    render() { 
        var {task_list, isStatusForm,content_search,filter,sort} = this.state;
        if(filter.job){
             task_list = task_list.filter((task) => {
                return task.job.toLowerCase().indexOf(filter.job) !== -1;
            })
        }
        task_list = task_list.filter((task) => {
            if(filter.status === -1){
                return task;
            }
            else{
                return task.status === (filter.status === 1 ? true : false);
            }
        })

        

        if(sort.by === "name"){
            task_list.sort((a,b) =>{
                if(a.job > b.job) return sort.status;
                else if(a.job < b.job) return - sort.status;
                else return 0;
            })
        }
        
        return ( 
           
                
                <div className="container-fluid p-5">
                    
                    <h1>Quản lý công việc </h1>
                    <br/>

                    

                    
                    <div className="row">

                    <div className={this.geneColumForm(this.state.isStatusForm)}>
                    {this.display(isStatusForm)}
                    </div>
                    
                    <div className={this.geneColum(this.state.isStatusForm)}>
                        
                        <div className="row">
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <button type="button" className="btn btn-warning" onClick={this.geneData}>GeneData</button>
                            </div>
                            &nbsp;
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ml-2">
                            <button type="button" className="btn btn-warning" onClick={this.onHandStatusForm}>Add Job</button>
                            </div>
                        </div>
                        <br/>
                        
                        
                       
                        
                        <Controller onSort = {this.onSort} onSendSearch = {this.onReceiveSearch}/>
                        
                        <br/>
                        <TaskList  onFilter={this.onFilter} onDelete={this.onDelete} onUpdateStatus={this.onUpdateStatus} onSendEdit={this.onReceiveEdit} task_list={task_list} search = {content_search}/>

                    </div>
                    
                    </div>
                    
                    
                    
                    
                </div>
                
         );
    }
}
 
export default ManageJob;
