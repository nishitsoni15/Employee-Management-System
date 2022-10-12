import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <a class="navbar-brand" href="#">Navbar</a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-outline-light" to="/profile/add">Add Profile</Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar;