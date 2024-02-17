import { IoSearch } from "react-icons/io5"

function SearchBar({ onChange }) {
    return (
        <div className="box-search">
            <IoSearch className="icon" size={28} />
            <input type="text" />
        </div>
    )
}

export default SearchBar