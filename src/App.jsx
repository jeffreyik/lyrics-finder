import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React, { useState} from 'react'
import Home from './pages/Home'
import Layout from './components/Layout'
import { SongContext } from './contexts/SongContext'
import LyricsPage from './pages/LyricsPage'
import ScrollTop from './components/ScrollTop'


function App() {
  const [options, setOptions] = useState({
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  })
  const [songs, setSongs] = useState({
    loading: false,
    songData: [],
    error: ''
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [lyrics, setLyrics] = useState({
    loading: false,
    lyricData: [],
    error: ''
  })
  
const getSong = async (e) => {
  e.preventDefault()
  setSongs({
    ...songs,
    loading: true
  })
  try {
    const data = await fetch(`https://spotify23.p.rapidapi.com/search/?q=${searchQuery}&type=tracks&offset=0&limit=10&numberOfTopResults=5`, options)
    const response = await data.json()
    const responseData = await response

    searchQuery !== '' &&  setSongs({
      loading: false,
      songData: responseData.tracks.items,
      error: '',
    })
  } catch (err) {
    console.log(err.message)
    setSongs({
      songData: [],
      error: err.message,
      loading: false
    })
  }
  // console.log(songs.songData)
}

const getSongLyric = async (id) => {
  setLyrics({
    ...lyrics,
    loading: true,
  })
  try {
    const data = await fetch(`https://spotify23.p.rapidapi.com/track_lyrics/?id=${id}`, options)
    const response = await data.json()
    const responseData = await response
    setLyrics({
      error: '',
      loading: false,
      lyricData: responseData.lyrics.lines
    })
  }
  catch (err) {
    console.log(err.message)
    setLyrics({
      lyricData: [],
      error: err.message,
      loading: false
    })
  }
 
}

  return (
    <SongContext.Provider value={{
      songs, setSongs, getSong,
      searchQuery, setSearchQuery, getSongLyric, lyrics}}>
        <BrowserRouter>
        <ScrollTop />
          <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path=':songId' element={<LyricsPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </SongContext.Provider>
  )
}

export default App