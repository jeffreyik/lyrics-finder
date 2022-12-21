import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SongContext } from '../contexts/SongContext';

const Card = ({ cover, id, title }) => {
    const { getSongLyric } = useContext(SongContext)

    return (
        <Link to={id}>
        <div className="card" onClick={() => getSongLyric(id)}>
        <img src={cover} alt="" />
        <div className="song">
            <div className="song-title">{title}</div>
        </div>
    </div>
        </Link>

    )
}

export default Card;