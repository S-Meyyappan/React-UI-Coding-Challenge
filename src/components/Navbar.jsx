import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link text-primary" : "nav-link"} 
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link text-primary" : "nav-link"} 
                                to="/userlist"
                            >
                                Userlist
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link text-primary" : "nav-link"} 
                                to="/add-user"
                            >
                                Add User
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
