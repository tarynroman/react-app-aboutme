import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiFillPhone} from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Taryn-Lee Roman</h1>
            <div className="links">

                    <Link to="/Home"><AiFillHome /> Home</Link>
                
     
                <Link to="/Contact"><AiFillPhone /> Contact</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;