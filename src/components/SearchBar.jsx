import { useContext } from "react"
import { SongContext } from "../contexts/SongContext"
import PrimaryBtn from "./PrimaryBtn"

const SearchBar = () => {
    const { getSong, searchQuery, setSearchQuery } = useContext(SongContext)

    return (
        <form className="search-bar" onSubmit={getSong} autoComplete="off">
            <input type="text"
             placeholder="What song is on your mind?" 
             name="search"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             autoComplete='off' />
            <PrimaryBtn text="Find Song" />
        </form>
    )
}

export default SearchBar