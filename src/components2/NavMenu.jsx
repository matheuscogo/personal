import Logo from '../assets/Logo.png';
import { MdAccountCircle } from "react-icons/md";


function NavMenu() {
    return (
        <nav>
            <img src={Logo} alt="Logo" width="120px" />
            <div>
                <h3>Olá, Matheus!</h3>
                <MdAccountCircle size={40} />
            </div>
        </nav>
    );
}

export default NavMenu;