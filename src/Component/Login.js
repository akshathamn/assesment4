import React,{Component} from 'react';
import { connect } from "react-redux";
import{login} from '../Action/Loginaction';
import './Login.css';
import Register from './Register';
class Login extends Component {
  handleSubmit=()=>{
    window.open("./Register")
   }
    render() {
      return (
        <div  id="center">
        <form >
          <h1 className="left">Login</h1>
          <label className="left">Username:</label><br/><br/>
            <input className="height" type="text"   /><br/><br/>
            <label className="left"> Password:</label><br/><br/>
            <input className="height" type="text" /><br/><br/>
            </form>
            <button className="login" onClick={this.handleSubmit}>Login</button>
            <text className="register" onClick={this.handleSubmit}>Register</text>
        
          
          {/* <p>{this.props.message}</p> */}
          
          </div>
        
      );
    }
  }


  
  const mapStateToProps=(state) => {
    const{username}=state.Loginreducer;
    const{password}=state.Loginreducer;
    const{message}=state.Loginreducer;
    return{username,password,message};
    
};
  export default connect (mapStateToProps,{login})(Login);
