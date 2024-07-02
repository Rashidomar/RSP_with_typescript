
const Navbar = () => {
    return ( 
        <>
            <header className="pb-5">
                <nav className="navbar navbar-expand-md fixed-top">
                    <div className="container-fluid">
                    <a className="navbar-brand link-dark" href="#">Carousel</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-dark">Home</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Contact Us</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
                        </ul>
                        <div className="d-flex">
                            <button type="button" className="btn btn-outline-dark me-2">Login</button>
                            <button type="button" className="btn btn-dark">Sign-up</button>
                        </div>
                    </div>
                    </div>
                </nav>
            </header>
        {/* <div className="dropdown-divider"></div> */}
        </> );
}
 
export default Navbar;