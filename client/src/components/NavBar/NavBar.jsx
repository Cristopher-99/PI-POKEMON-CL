import { Link } from "react-router-dom";
import logoPoke from "../../img/portadapokemon.png"
import Search from "./Search/Search";
import { useDispatch } from "react-redux";
import { clearAllPokes, clearTypes} from "../../redux/actions";
import "./NavBar.css"
const NavBar = (props)=> {
    const dispatch= useDispatch();
    function onClickChange(){
        //dispatch(getAllPokes())
        dispatch(clearTypes())
        dispatch(clearAllPokes())
    }

    return (
        <div className="NavContainer">
            {/* <div>
                <input type="button" onClick={()=>onClickChange()}/>
            </div> */}
            <nav>
                <ul> 
                    <Link to="/"><img src={logoPoke} alt="logo" height="150vh" width="200vh"/></Link>
                    <Link to="/home" className="n">Home</Link>
                    <Link to="/create" className="n">Crear Pokemon</Link>
                    
                </ul>
            </nav>
                    <div><Search paginado={props.paginado}/></div>
        </div>
    )
}

export default NavBar;