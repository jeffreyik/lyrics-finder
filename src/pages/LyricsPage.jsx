import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SongContext } from "../contexts/SongContext";
import ClipLoader from "react-spinners/ClipLoader";

const LyricsPage = () => {
    const { songs, lyrics } = useContext(SongContext)
    const { songId } = useParams()
    const song = songs.songData.find(song => song.data.id == songId)

    return (
        <div className="lyrics-page">
            <div className="container">
                <div className="small-card">
                    <img src={song.data.albumOfTrack.coverArt.sources[0].url} alt="" />
                    <h2>{song.data.name}</h2>
                </div>
                <div className="lyrics-container">
                {
                    lyrics === null || lyrics.lyrics.lines === undefined  ?
                    <ClipLoader color='#F7DE3E' loading={true} size={50} />
                    : lyrics.lyrics.lines.map(line => (
                        <p key={line.providerLyricsId}>{line.words}</p>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default LyricsPage;