import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Axios from 'axios'
import "./LoginScreen.css"
import { Store } from '../Store';
import { toast } from "react-toastify";
import { getError } from "../utils";

const Signup=()=>{

    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('') 
    const [confirmPassword, setConfirmPassword] = useState('');


    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const handleSubmit= async(e)=>{
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
          }
        try{
            console.log('login start ', name,email,password);
            const { data }= await Axios.post('http://127.0.0.1:5000/api/users/signup',{
                "name"  : name,
                "email" : email,
                "password": password
            });
    
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/');
            console.log('data is ', data) ;
    
        }catch(err){
            toast.error(getError(err));
        }
    }
    useEffect(() => {
        if (userInfo) {
          navigate(redirect);
        }
      }, [navigate, redirect, userInfo]);
     
   return(
        
        <section className="sign-up">
            <div className="container" id="_c">
                <div className="signup-content" class="row d-flex justify-content-center align-items-center">
                <div class="form d-flex justify-content-between">
                    <div className="login-image">
                        <figure>
                            {/* <img id="login_img" class="signup_img" src={require("./signup_img.png")} alt="signup_img"/> */}
                        </figure> 
                    </div> 
                    <div class="card2">
                    <div className="signup-form" class="form">
                
                        <h3 className="form-title">Sign Up Now!</h3><br/>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div class="md-form md-outline">
                                    
                                    <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
                                    <label for="floatingInput">Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                                    <label for="floatingInput">Email</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                                    <label for="floatingPassword">Password</label>
                                    </div>
                                    <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} />
                                    <label for="floatingPassword">Confirm Password</label>
                                    </div>
                                   <br/>
                                    <button class="lgnbtn2">Register</button>
                                </div> 
                            </div>
                        </form>
                       
                        <Link to="/login"className="signup-image-link">Already have a account? Login here!</Link> 
                    </div>
                    </div>
                    </div>
                    
                </div>      
            </div>
        </section>
        
    
   ) 
}

export default Signup