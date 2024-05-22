import "./feed.css";
import Image from "next/image";

export default function Feed() {
  return (
    <div className="page-container">
      <div className="feed-container">
        <div className="feed-item" >
          <div className="feed-header">
            <image src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg?size=626&ext=jpg&ga=GA1.1.228289238.1715166033&semt=sph" alt="User Avatar" class="avatar" />
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
            <image
            fill
             src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg?size=626&ext=jpg&ga=GA1.1.228289238.1715166033&semt=sph" className="avatar" />
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
            <image src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg?size=626&ext=jpg&ga=GA1.1.228289238.1715166033&semt=sph" alt="User Avatar" className="avatar" />
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
            <image src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg?size=626&ext=jpg&ga=GA1.1.228289238.1715166033&semt=sph" alt="User Avatar" class="avatar" />
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
              style={{ objectFit: "cover", borderRadius: "25px" }} src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg?size=626&ext=jpg&ga=GA1.1.228289238.1715166033&semt=sph" alt="User Avatar" class="avatar" />
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
