import { Link } from "react-router-dom";

const Signup = () => {
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
                            <form>
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-cubes fa-2x" style={{color: "#ff6219"}}></i>
                                    <span className="h1 fw-bold">Logo</span>
                                </div>
                                <h5 className="fw-normal my-3" style={{letterSpacing: "1px"}}>New Account</h5>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="text" id="form2Example17" className="form-control" />
                                    <label className="form-label" htmlFor="form2Example17">Username</label>
                                </div>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" id="form2Example17" className="form-control" />
                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                </div>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="password" id="form2Example27" className="form-control" />
                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                </div>

                                <div className="pt-1 mb-4">
                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block" type="button">Create Account</button>
                                </div>

                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Already have an account? <Link to={"/login"}
                                    style={{color: "#393f81"}}>login</Link></p>
                                {/* <a href="#!" className="small text-muted">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a> */}
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