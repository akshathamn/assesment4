import React,{Component} from 'react';
import { connect } from "react-redux";
import{register} from '../Action/Registeraction';
import './Login.css';
import './Register.css';

class Register extends Component {
    
    render() {
      return (
        <div className="center"> 
        <div class="container">
         <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm"> 
        <form>
            <h3 className="left1">Register</h3>
            <label className="left"><b>Firstname</b></label><br></br>
            <input className="height" type='text' name='username'></input><br></br>
            <label className="left"><b>Lastname</b></label><br></br>
            <input className="height" type='text' name='username'></input><br></br>
            <label className="left"><b>Username</b></label><br></br>
            <input className="height" type='text' name='username'></input><br></br>
            <label className="left"><b>Password</b></label><br></br>
            <input className="height" type='text' name='password'></input><br></br>
        </form><br></br>
        <button className="login" onClick={this.props.handleClick} onClick={this.handleclick}>Register</button>
        <p className="register" onClick={this.handlepress}>Cancel</p>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
        </div>
        </div>
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
