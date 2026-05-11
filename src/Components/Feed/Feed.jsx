import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './Feed.css'
import { API_KEY, value_converter } from '../../data'

const Feed = ({category}) => {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    const response = await fetch(videoListUrl)
    const result = await response.json()
    setData(result.items || [])
  }

  useEffect(()=>{
    fetchData();
  },[category])

  return (
    <div className="feed">
      {data.map((item)=>{
        return(
        <Link to={`/video/${item.snippet.categoryId }/${item.id}`} className='card' key={item.id}>
      <img src={item.snippet.thumbnails.medium.url} alt={item.snippet?.title || 'video thumbnail'} />
      <h2>{item.snippet.title}</h2>
      <h3>{item.snippet.channelTitle}</h3>
      <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
    </Link>
        )
      })}
      
     
    </div>
  )
}

export default Feed
