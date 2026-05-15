import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Recommended.css'

import { API_KEY } from '../../data'

const Recommended = ({ videoId, categoryId }) => {
  const [apiData, setApidata] = useState([])

  const fetchData = async () => {
    if (!videoId) {
      setApidata([])
      return
    }

    const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=20&key=${API_KEY}`
    const response = await fetch(relatedVideoUrl)
    const data = await response.json()
    setApidata(data.items || [])
  }

  useEffect(() => {
    fetchData()
  }, [videoId])

  return (
    <div>
      {apiData.map((item, index) => (
        <div key={item.id?.videoId || index} className='recommended'>
          <Link
            to={`/video/${categoryId || 0}/${item.id?.videoId || ''}`}
            className="side-video-list"
          >
            {item?.snippet?.thumbnails?.medium?.url ? (
              <img src={item.snippet.thumbnails.medium.url} alt={item?.snippet?.title || ''} />
            ) : null}
            <div className="vid-info">
              <h4>{item?.snippet?.title || ''}</h4>
              <p>{item?.snippet?.channelTitle || ''}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Recommended
