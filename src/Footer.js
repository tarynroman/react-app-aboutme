import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiFillPhone} from "react-icons/ai";
import { AiOutlineMail} from "react-icons/ai";

const Footer = () => {
    return (
        <nav className="footer">
            
            <div className="footerContent">
                <div className="footerConn">
                    <h1>Want to stay connected?</h1>
                        <br/> 
                        <p><AiOutlineMail/> tarynroman17@gmail.com</p>
                        <p><AiFillPhone/> 081 797 2400</p>
                </div>
                    

                <div className="footerNav">
                    <h1>Navigate</h1>
                    <p><Link to="/Home"><AiFillHome /> Home</Link></p>
                    <p><Link to="/Contact"><AiFillPhone /> Check out our contact page</Link></p>
                </div>
            </div>
        </nav>
      );
}
 
export default Footer;