import React, { Component } from 'react';
import axios from 'axios'
import './SignUp.css';
import face from '../../Asset/facebook.png';
import google from '../../Asset/google.png';


class SignUp extends Component {
  componentDidMount(){
    document.title = "Sign-Up - E-Learning"
  }
  constructor(props) {
    super(props);

    this.state = {
      checkmail: false,
      // confirm: true,
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  
  handleSubmit = (event) => {
    event.preventDefault();
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    const data = {
        // userFirstName: this.refs.firstname.value,
        // userLastName: this.refs.lastname.value,
        userEmail: this.email.value,
        userPassword: this.password.value
    }
    console.log(data);
    axios.post('/user',data,axiosConfig);
  }
  checkpass = ( ) =>{
      if(this.password.value === this.confirmpassword.value){
          this.message.style.color = 'green';
          // this.setState({
          //   confirm: true
          // })
         
      }else{
        this.message.style.color = 'red';
        // this.setState({
        //   confirm: false
        // })
      }
  }
  checkmail = () =>{
      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(reg.test(this.email.value)){
        this.checkmail.style.color = 'green';
      }else{
        this.checkmail.style.color = 'red';
      }
  }
  render() {
    return (
      <div className="container">
      <section className="access">
        <div className="title">
          <h1>Create your student account</h1><br/>
          {/* <p>Your student account is your portal to all things E-LEARNING: your classroom, projects, forums, career resources, and more!</p> */}
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)}
          className="needs-validation" ref={(el) => this.myFormRef = el} noValidate>
          {/* <div className="form-row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" ref="firstname" name="firstname" 
              id="validationCustom01" placeholder="First Name" required/>
              <div className="invalid-feedback">
                Please provide your first name.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" ref="lastname" name="lastname"
              id="validationCustom02"  placeholder="Last Name" required />
              <div className="invalid-feedback">
                Please provide your last name.
              </div>
            </div>
          </div> */}
          <div className="form-row">
            <div className="col-md-10 mb-3">
              <input type="email" ref={(el) => this.email = el} className="form-control" 
              name="email" onKeyUp={this.checkmail}
              id="validationCustom03" placeholder="Email" required />
            </div>
            <div className="col-md-2 mb-3">
              <i className="fa fa-check" ref={(el) => this.checkmail = el}/>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-5 mb-3">
              <input type="password" ref={(el) => this.password = el} onKeyUp={this.checkpass} 
              className="form-control" name="password"
              id="validationCustom04" placeholder="Password" required />
            </div>
            <div className="col-md-5 mb-3">
              <input type="password" ref={(el) => this.confirmpassword = el} onKeyUp={this.checkpass} 
              className="form-control" name="confirmpassword"
              id="validationCustom05" placeholder="Confirm Password" required />
            </div>
            <div className="col-md-2 mb-3">
              <i className="fa fa-check" ref={(el) => this.message = el}/>
              {/* {this.state.confirm ? <span>true</span> : <span>false</span>} */}
            </div>
          </div> 
          
          <div className="form-row">
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12 mb-3">
              <button className="btn btn-light button" type="submit" >SIGN UP</button>   
            </div>
          </div>           
        </form>
        </section> 
        <hr/>
        <p>or sign up with one of these services</p>
        <div className="form-row">
            <div className="col-md-6 sm-12 mb-3">
              <a href="https://facebook.com">
                <img src={face} alt="" className="img" />
              </a>
            </div>
            <div className="col-md-6 sm-12 mb-3">
              <a href="https://google.com">
                <img src={google} alt="" className="img" />
              </a>
            </div>
        </div>       
      </div>
    );
  }
}
export default SignUp;