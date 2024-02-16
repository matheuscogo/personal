import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdExit } from "react-icons/io";

function Footer() {
    const pathname = window.location.pathname;
    return (
        <footer>
            {
                pathname === "/home" ? <GoHomeFill className="icon" size={28} /> : <GoHome className="icon" size={28} />
            }
            <IoIosAddCircle className="icon" size={28} />
            <IoMdExit className="icon" size={28} />
        </footer>
    );
}

export default Footer;