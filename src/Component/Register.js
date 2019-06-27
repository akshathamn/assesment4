import React,{Component} from 'react';
import { connect } from "react-redux";
import{register} from '../Action/Registeraction';
import './Register.css';

class Register extends Component {
    
    render() {
      return (
        <div  id="center">
        <form >
            <h1 className="left3">Register</h1>
        <label className="left1">First Name:</label><br/>
            <input className="left2" type="text"   /><br/><br/>
            <label className="left1">Last Name:</label><br/>
            <input className="left2" type="text"   /><br/><br/>
            <label className="left1">Username:</label><br/>
            <input className="left2" type="text"   /><br/><br/>
            <label className="left1"> Password:</label><br/>
            <input className="left2" type="text" /><br/><br/>
            </form>
          <button className="login1" onClick={this.props.register} >Register</button>
          <text className="register1" onClick={this.handleSubmit}>Cancel</text>
          <p>{this.props.message}</p>
          </div>
        
      );
    }
  }


  
  const mapStateToProps=(state) => {
    const{firstname}=state.Registerreducer;
    const{lastname}=state.Registerreducer;
    const{username}=state.Registerreducer;
    const{password}=state.Registerreducer;
    const{message}=state.Registerreducer;
    return{firstname,lastname,username,password,message};
    
};
  export default connect (mapStateToProps,{register})(Register);
