import React, { useEffect, useState } from 'react'
import './Recommended.css'

import { API_KEY } from '../../data'

const Recommended = ({ videoId }) => {
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
          <div className="side-video-list">
            {item?.snippet?.thumbnails?.medium?.url ? (
              <img src={item.snippet.thumbnails.medium.url} alt={item?.snippet?.title || ''} />
            ) : null}
            <div className="vid-info">
              <h4>{item?.snippet?.title || ''}</h4>
              <p>{item?.snippet?.channelTitle || ''}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recommended
