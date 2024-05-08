import "./feed.css";

export default function Feed() {
  return (
    <div className="page-container">
      <div className="feed-container">
        <div className="feed-item" >
          <div className="feed-header">
            <image src="path_to_avatar.jpg" alt="User Avatar" class="avatar" />
            <span className="username">John Doe</span>
            <span className="timestamp">2 hours ago</span>
          </div>
          <div className="feed-content">
            <button className="creatPost" >What are you think about...</button>
          </div>
          <div className="feed-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div >
        <div className="feed-item" >
          <div className="feed-header">
            <image src="pexels-lokmansevim-13887064.jpg" alt="User Avatar" class="avatar" />
            <span className="username">Alexsander Mokdon</span>
            <span className="timestamp">2 hours ago</span>
          </div>
          <div className="feed-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feed-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div >
        <div className="feed-item" >
          <div className="feed-header">
            <image src="utils/components/feed/pexels-lokmansevim-13887064.jpg" alt="User Avatar" className="avatar" />
            <span className="username">John Doe</span>
            <span className="timestamp">2 hours ago</span>
          </div>
          <div className="feed-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feed-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div >
        <div className="feed-item" >
          <div className="feed-header">
            <image src="utils/components/feed/pexels-lokmansevim-13887064.jpg" alt="User Avatar" class="avatar" />
            <span className="username">John Doe</span>
            <span className="timestamp">2 hours ago</span>
          </div>
          <div className="feed-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feed-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div >
        <div className="feed-item" >
          <div className="feed-header">
            <image fill
              style={{ objectFit: "cover", borderRadius: "25px" }} src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg" alt="User Avatar" class="avatar" />
            <span className="username">John Doe</span>
            <span className="timestamp">2 hours ago</span>
          </div>
          <div className="feed-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feed-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div >
      </div>
    </div>
  )
}
