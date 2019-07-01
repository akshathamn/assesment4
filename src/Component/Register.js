import React,{Component} from 'react';
import { connect } from "react-redux";
import{register} from '../Action/Registeraction';
import './Login.css';
import './Register.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      fnamerequired:'',
      lnamerequired:'',
      namerequired:'',
     pwrequired:''
  }
}
handleChange=(e)=>{

this.setState({[e.target.name]:e.target.value});

}
handleSubmit=(e)=>{
  var exp=/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
  if(this.state.firstname.length==0 && this.state.lastname.length==0 && this.state.username.length==0 && this.state.password.length==0)
{
this.setState({fnamerequired:"first name required",lnamerequired:"last name required",namerequired:"user name required",pwrequired:"password required"})

}
else if(this.state.firstname.length==0)
{
this.setState({fnamerequired:"first name required"})
return true;
} 
else if(this.state.lastname.length==0)
{
this.setState({lnamerequired:"last name required"})
return true;
} 
else if(this.state.username.length==0)
{
this.setState({usernamerequired:"user name required"})
return true;
} 

else if (this.state.password.length==0)
{
this.setState({pwrequired:"password required"})
return true;
} 
else if (exp.test(this.state.password)==false)
{
this.setState({pwrequired:"password invalid"})
return true;
} 
else
{
this.props.register();
}
} 
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
            <input className="height" type='text' name='firstname' onChange={this.handleChange}></input><br></br>
            <p>{this.state.fnamerequired}</p>
            <label className="left"><b>Lastname</b></label><br></br>
            <input className="height" type='text' name='lastname' onChange={this.handleChange}></input><br></br>
            <p>{this.state.lnamerequired}</p>
            <label className="left"><b>Username</b></label><br></br>
            <input className="height" type='text' name='username' onChange={this.handleChange}></input><br></br>
            <p>{this.state.namerequired}</p>
            <label className="left"><b>Password</b></label><br></br>
            <input className="height" type='text' name='password' onChange={this.handleChange}></input><br></br>
            <p>{this.state.pwrequired}</p>
        </form><br></br>
        <button className="login" onClick={this.handleSubmit}>Register</button>
        <p className="register" >Cancel</p>
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
    // const{message}=state.Registerreducer;
    return{firstname,lastname,username,password};
    
};
  export default connect (mapStateToProps,{register})(Register);
