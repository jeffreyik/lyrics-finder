import { React, useContext } from 'react'
import {SongContext} from '../contexts/SongContext'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import ClipLoader from 'react-spinners/ClipLoader'

const Home = () => {
    const { songs } = useContext(SongContext)
    const cards = songs.songData.map(song => (
        <Card
            key={song.data.id}
            id={song.data.id}
            cover={song.data.albumOfTrack.coverArt.sources[0].url}
            title={song.data.name}
        />
    ))

    return (
        <div className="App">
            <header>
                <h1 className="header-text">
                Find <span id="blue">lyrics</span> to <span id="green">songs</span> you're looking for
                </h1>
                <SearchBar />

                <div className="card-container">
                    <ClipLoader color='#F7DE3E' loading={songs.loading} size={50} />
                    { cards }
                </div>
            </header>
        </div>
    )
}

export default Home