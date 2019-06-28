// import React,{Component} from 'react';
// import { connect } from "react-redux";
// import{login} from '../Action/Loginaction';
// import './Login.css';
// // import Register from './Register';
// class Login extends Component {
//   handleSubmit=()=>{
//     window.open("./Register")
//    }
//     render() {
//       return (
//         <form className="center">
//           <h1>Login</h1>
//   <div class="form-group col-md-3">
//     <label for="exampleInputEmail1">Username</label>
//     <input type="email" class="form-control" ></input>
    
//   </div>
//   <div class="form-group col-md-3">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder=""></input>
//   </div>
//   <div class="form-group">
    
//   <button  class="btn btn-primary onClick={this.handleSubmit}">Login</button>
//   <p >Register</p>
//   </div>
// </form>



        // <div  id="center">
        // <form >
        //   <h1 className="left">Login</h1>
        //   <label className="left">Username:</label><br/>
        //     <input className="height" type="text"   /><br/><br/>
        //     <label className="left"> Password:</label><br/>
         //     <input className="height" type="text" /><br/><br/>
              //     </form>
                  //     <button className="login" onClick={this.handleSubmit}>Login</button>
                   //     <text className="register" onClick={this.handleSubmit}>Register</text>
        
          
                 //   {/* <p>{this.props.message}</p> */}
          
                  //   </div>
        
  //     );
  //   }
  // }


  
//   const mapStateToProps=(state) => {
//     const{username}=state.Loginreducer;
//     const{password}=state.Loginreducer;
//     const{message}=state.Loginreducer;
//     return{username,password,message};
    
// };
//   export default connect (mapStateToProps,{login})(Login);


// --------------------------------------------------------------------------------------
import React, { Component } from 'react';
import './Login.css';
import {connect} from 'react-redux';
import {login} from '../Action/Loginaction';
import browserHistory from '../Utils/browserHistory';

class Login extends Component{

  handlepress=()=>{
        browserHistory.push('/Register')
  }

  handleclick=()=>{
          browserHistory.push('/User')
  }

  render(){
    return(
        <div className="center"> 
        <div class="container">
         <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm"> 
        <form>
            <h3 className="left">Login</h3>
            <label className="left"><b>Username</b></label><br></br>
            <input className="height" type='text' name='username'></input><br></br>
            <label className="left"><b>Password</b></label><br></br>
            <input className="height" type='text' name='password'></input><br></br>
        </form><br></br>
        <button className="login" onClick={this.props.handleClick} onClick={this.handleclick}>Login</button>
        <p className="register" onClick={this.handlepress}>Register</p>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
        </div>
        </div>
        </div>
      );
    }
}
const mapStateToProps=(state)=>{
    const{name}=state.Loginreducer;
    const{password}=state.Loginreducer;
    return{name,password};
};
export default connect(mapStateToProps,{login})(Login);
