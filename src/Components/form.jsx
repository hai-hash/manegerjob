import React, { Component } from 'react';
class Form extends Component {
    state = { 
       
            username: '',
            password: '',
            gele: 1,
            langule: 'vi',
            com : false,
            ca : false,
            canh : false,

     }
     setColor(){
        return{
            color: this.props.color,
            borderColor: this.props.color,
           
        }
    }
     constructor(props){
         super(props);
         this.onHandUser = this.onHandUser.bind(this);
         this.onHandSubmit = this.onHandSubmit.bind(this);
     }
    onHandUser(event){
        var name = event.target.name;
        var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        this.setState({
            [name] : value
        });

    }
    onHandSubmit(event){
        event.preventDefault();
        console.log(this.state)
      
    }

    render() { 
        return ( 
            
            <div className="container">
                
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        
                        <form onSubmit={this.onHandSubmit}>
                            <legend>Thông tin mua hàng</legend>
                        
                            <div className="form-group">
                                <label>UserName</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="username" 
                                onChange={this.onHandUser} 
                                placeholder="nhập vào tên đăng nhập"
                                style={this.setColor()}
                                 />
                            </div>

                            <div className="form-group">
                                <label>Pass Word</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="password" 
                                onChange={this.onHandUser} 
                                placeholder="nhập vào mật khẩu" 
                                style={this.setColor()}
                                />
                            </div>

                            
                            <select style={this.setColor()} name="gele" id="inputgele" className="form-control" required="required" onChange={this.onHandUser} value={this.state.gele}>
                                <option style={this.setColor()} value={0}>Nữ</option>
                                <option style={this.setColor()} value={1}>Nam</option>
                            </select>

                            <label>Ngôn ngữ</label>
                            
                            <div className="radio">
                                <label>
                                    <input 
                                    style={this.setColor()}
                                    type="radio" 
                                    name="langule" 
                                    value="vi" 
                                    checked={this.state.langule === 'vi'} 
                                    onChange={this.onHandUser}  />
                                    Tiếng việt
                                </label>
                                <br />
                                <label>
                                    <input 
                                    style={this.setColor()}
                                    type="radio" 
                                    name="langule" 
                                    value="en" 
                                    checked={this.state.langule === 'en'} 
                                    onChange={this.onHandUser} />
                                    Tiếng anh
                                </label>
                            </div>

                            <br/>
                            <label>Món ăn yêu thích</label>
                            <div className="checkbox">
                                <label>
                                    <input style={this.setColor()} type="checkbox" value={true} name="com" onChange={this.onHandUser} />
                                    Cơm
                                </label>
                                <br/>
                                <label>
                                    <input style={this.setColor()} type="checkbox" value={true} name="ca" onChange={this.onHandUser} />
                                    Cá
                                </label>
                                <br/>
                                <label>
                                    <input style={this.setColor()} type="checkbox" value={true} name="canh" onChange={this.onHandUser} />
                                    Canh
                                </label>
                            </div>
                            
                            
                            
                        
                            
                        
                            <button style={this.setColor()} type="submit" className="btn">Submit</button>
                        </form>
                        
                        
                    </div>
                </div>
                
            </div>
            
         );
    }
}
 
export default Form;