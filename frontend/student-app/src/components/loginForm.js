import React, { useState } from 'react'   
import axios from 'axios';  


const Login = (props) => {
    const [student, setStudent] = useState({ Username: '', Password: ''});  
    const apiUrl = "http://localhost:3000/login";    
    const Login = (e) => {    
            e.preventDefault();    
            debugger;   
            const data = { Username:student.Username, Password: student.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                // const User =result.data.UserDetails;  
                console.log(result.data.message);  
                if (result.data.status === '200')    
                    props.history.push('/Dashboard')    
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                  
                setStudent({...student, [e.target.name]: e.target.value});    
              }    
    return (  
        
        <div class="container">  
        <div class="row justify-content-center">  
          <div class="col-xl-10 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>  
                  <div class="col-lg-6">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>  
                      </div>  
                      <form onSubmit={Login} class="user">  
                        <div class="form-group">  
                          <input type="text" class="form-control" value={student.Username} onChange={ onChange }  name="Username" id="Name" aria-describedby="nameHelp" placeholder="Enter Username"/>  
                        </div>  
                        <div class="form-group">  
                          <input type="password" class="form-control" value={student.Password} onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Password"/>  
                        </div>  
                    
                        <button type="submit" className="btn btn-info mb-1" block><span>Login</span></button>    
                        <hr/>  
                      </form>  
                      <hr/>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default Login;