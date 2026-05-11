import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import Video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'  
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'


const PlayVideo = ({videoId}) => {

  const [apiData, setApiData] =useState(null);
  const [channalData, setChannalData] =useState(null);


  const fetchVideoData = async ()=>{
    // Fetch Video Data
    const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`
    const response = await fetch(videoDetailsUrl)
    const data = await response.json()
    setApiData(data.items?.[0] || null)
  }

  
    const fetchOtherData = async ()=>{
      if (!apiData?.snippet?.channelId) return
      // Fetch Channel Data
      const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`

      const response = await fetch(channelDataUrl)
      const data = await response.json()
      setChannalData(data.items?.[0] || null)


    }


  useEffect(()=>{
    fetchVideoData();
  },[videoId])


  useEffect(()=>{
    if (apiData?.snippet?.channelId) {
      fetchOtherData();
    }
  },[apiData])


  return (
    <div className='play-video'>
      {/* <video src={Video1} controls autoPlay muted></video>   */}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?.snippet?.title ?? "Title Here"}</h3>
      <div className='video-play-info'>
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
          
        <div>
          <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
        <span><img src={dislike} alt="" /></span>
        <span><img src={share} alt="" />share</span>
        <span><img src={save} alt="" />save</span>
        </div>
    </div>
    <hr />
    <div className='Publisher'>
      <img src={channalData?.snippet?.thumbnails?.default?.url || ""} alt="" />
      <div>
        <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
        <span>1M Subscribers</span>
      </div>
      <button>Subscribe</button>
       </div>
       <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):102} comments</h4>
       </div>
       <div className='comment'>
        <img src={user_profile} alt="" />
        <div>
          <h3>Jach nicholson <span>1 day ago</span></h3>
          <p>A global computer network provide a varity of imformation and communication faces of interconnected networks using standardized communication</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
        </div>
       </div>

        <div className='comment'>
        <img src={user_profile} alt="" />
        <div>
          <h3>Jach nicholson <span>1 day ago</span></h3>
          <p>A global computer network provide a varity of imformation and communication faces of interconnected networks using standardized communication</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
        </div>
       </div>

        <div className='comment'>
        <img src={user_profile} alt="" />
        <div>
          <h3>Jach nicholson <span>1 day ago</span></h3>
          <p>A global computer network provide a varity of imformation and communication faces of interconnected networks using standardized communication</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
        </div>
       </div>

        <div className='comment'>
        <img src={user_profile} alt="" />
        <div>
          <h3>Jach nicholson <span>1 day ago</span></h3>
          <p>A global computer network provide a varity of imformation and communication faces of interconnected networks using standardized communication</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
        </div>
       </div>

        <div className='comment'>
        <img src={user_profile} alt="" />
        <div>
          <h3>Jach nicholson <span>1 day ago</span></h3>
          <p>A global computer network provide a varity of imformation and communication faces of interconnected networks using standardized communication</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
        </div>
       </div>

        <div className='comment'>
        <img src={user_profile} alt="" />
        <div>
          <h3>Jach nicholson <span>1 day ago</span></h3>
          <p>A global computer network provide a varity of imformation and communication faces of interconnected networks using standardized communication</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
        </div>
       </div>

        <div className='comment'>
        <img src={user_profile} alt="" />
        <div>
          <h3>Jach nicholson <span>1 day ago</span></h3>
          <p>A global computer network provide a varity of imformation and communication faces of interconnected networks using standardized communication</p>
        <div className="comment-action">
          <img src={like} alt="" />
          <span>244</span>
          <img src={dislike} alt="" />
        </div>
        </div>
       </div>

    </div>  
      
  )
}

export default PlayVideo
