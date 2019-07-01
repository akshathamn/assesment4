import React, { Component } from 'react';
import './Login.css';
import {connect} from 'react-redux';
import {login} from '../Action/Loginaction';
// import {register} from '../Action/Registeraction';


class Login extends Component{
  constructor(props){
    super(props);
    this.state={
    username:'',
    Password:'',
    namerequired:'',
    pwrequired:''
    
    }
    }
    handleChange=(e)=>{
    
    this.setState({[e.target.name]:e.target.value});
    
    }
    handleSubmit=(e)=>{
      var exp=/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
    if(this.state.username.length==0 && this.state.Password.length==0)
    {
    this.setState({namerequired:"user name required",pwrequired:"password required"})
    
    }
    else if(this.state.username.length==0)
    {
    this.setState({namerequired:"user name required"})
    return true;
    } 
    
    else if (this.state.Password.length==0)
    {
    this.setState({pwrequired:"password required"})
    return true;
    } 
    else if (exp.test(this.state.Password)==false)
{
this.setState({pwrequired:"password invalid"})
return true;
} 
    else
    {
    this.props.login();
    }
    } 

  render(){
    return(
        <div className="center"> 
        <div class="container">
         <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"> 
        <form>
            <h3 className="left">Login</h3>
            <label className="left"><b>Username</b></label><br></br>
            <input className="height" type='text' name='username' onChange={this.handleChange}/><br></br>
            <p>{this.state.namerequired}</p>
            <label className="left"><b>Password</b></label><br></br>
            <input className="height" type='text' name='Password' onChange={this.handleChange}/><br></br>
            <p>{this.state.pwrequired}</p>
        </form><br></br>
            <button className="login"  onClick={this.handleSubmit}>Login</button>
            <a href='/Register' className="register">Register</a>
         </div>
        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
        </div>
        </div>
        </div>
      );
    }
}
const mapStateToProps=(state)=>{
    const{username}=state.Loginreducer;
    const{Password}=state.Loginreducer;
    // const{message}=state.Registereducer;
    
return{username,Password};
    
    
};
export default connect(mapStateToProps,{login})(Login);

