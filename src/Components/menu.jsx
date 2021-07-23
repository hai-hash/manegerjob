import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Menu extends Component {
    state = {  }
    colortext(){
        return "text-white nav-link";
    }
    setBackGround =() =>{
        return{
            backgroundColor: this.props.color
        }

    }
    render() { 
        return ( 
            <div className="text-white" style={this.setBackGround()}>
            <ul className="nav nav-tabs nav-stacked">
                <li className="nav-item">
                    <a href="https://www.facebook.com/profile.php?id=100005400360929" className={this.colortext()}>Trang chủ</a>
                </li>
                <li className="nav-item">
                    <a href="https://www.facebook.com/profile.php?id=100005400360929" className={this.colortext()}>Facebook</a>
                </li>
                <li className="nav-item disabled">
                    <a href="https://www.facebook.com/profile.php?id=100005400360929" className={this.colortext()}>Zalo</a>
                </li>
        </ul>
            </div>
        
                
            
         );
    }
}
 
export default Menu;