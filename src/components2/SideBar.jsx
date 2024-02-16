import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdExit } from "react-icons/io";

function SideBar() {
    const pathname = window.location.pathname;
    return (
        <div className="box-sidebar">
            <div>
                <h1>Menu</h1>
                <a href="/home">
                    {
                        pathname === "/home" ? <GoHomeFill className="icon" size={28} /> : <GoHome className="icon" size={28} />
                    }
                    <span>Página Inicial</span>
                </a>
                <a href="/addstudent">
                    <IoIosAddCircle className="icon" size={28} />
                    <span>Adicionar Aluno</span>
                </a>
            </div>
            <a href="/">
                <IoMdExit className="icon" size={28} />
                <span>Sair</span>
            </a>
        </div>
    );
}

export default SideBar;