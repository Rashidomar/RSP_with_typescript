import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type userData = {
    username : string,
    email : string,
    password : string,
}

const Signup = () => {

    const [formData,setformData] = useState<userData>({
        username : "",
        email : "",
        password: ""   
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setformData({...formData,[e.target.name] : e.target.value});

    }   

    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await axios.get("http://localhost:8000/users")
        console.log(result.data)
      }

    return ( 
        <>
            <section style={{backgroundColor: "grey"}}>
                <div className="container py-4">
                    <div className="row d-flex justify-content-center align-items-center">
                    <div className="col col-xl-10">
                        <div className="card">
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                alt="login form" className="img-fluid h-100"  />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                            <div className="card-body p-lg-5 text-black">
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-cubes fa-2x" style={{color: "#ff6219"}}></i>
                                    <span className="h1 fw-bold">Logo</span>
                                </div>
                                <h5 className="fw-normal my-3" style={{letterSpacing: "1px"}}>New Account</h5>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="text"name="username" onChange={handleChange} value={formData.username} className="form-control" />
                                    <label className="form-label" htmlFor="form2Example17">Username</label>
                                </div>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" name="email" onChange={handleChange} value={formData.email} className="form-control" />
                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                </div>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="password" name="password" onChange={handleChange} value={formData.password} className="form-control" />
                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                </div>
                                <div className="pt-1 mb-4">
                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block" type="submit">Create Account</button>
                                </div>

                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Already have an account? <Link to={"/login"}
                                    style={{color: "#393f81"}}>login</Link></p>
                            </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </> 
    );
}
 
export default Signup;