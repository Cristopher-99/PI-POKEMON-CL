import { Link } from "react-router-dom";

const NavBar = ()=> {
    return (
        <div>
            <nav>
                <Link to="/home" > <ul> Home </ul> </Link>
                <Link to="/create" > <ul> Crear Pokemon </ul> </Link>
            </nav>
        </div>
    )
}

export default NavBar;