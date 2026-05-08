import React from 'react'
import './PlayVideo.css'
import Video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'  
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={Video1} controls autoPlay muted></video>  
      <h3>Youtube Channal to Learn Web Development</h3>
      <div className='video-play-info'>
        <p>1525 views &bull; 2days ago</p>
          
        <div>
          <span><img src={like} alt="" />125</span>
        <span><img src={dislike} alt="" />2</span>
        <span><img src={share} alt="" />share</span>
        <span><img src={save} alt="" />save</span>
        </div>
    </div>
    <hr />
    <div className='Publisher'>
      <img src={jack} alt="" />
      <div>
        <p>Ansari.Tech</p>
        <span>1M Subscribers</span>
      </div>
      <button>Subscribe</button>
       </div>
       <div className="vid-description">
        <p>Chammal that make Learn Easy</p>
        <p>Subscribe Ansari.tech to watch more tutorialS on web Development</p>
        <hr />
        <h4>130 comments</h4>
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
