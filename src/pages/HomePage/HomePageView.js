import NavMenu from "../../components2/NavMenu";
import SearchBar from "../../components2/SearchBar";
import Footer from "../../components2/Footer";
import Students from "../../components2/Students";
import SideBar from "../../components2/SideBar";

function HomePageView() {
    return (
        <main className="box-home">
            <SideBar />
            <div className="content-home">
                <NavMenu />
                <SearchBar />
                <Students />
            </div>
            <Footer />
        </main>
    );
}

export default HomePageView;