import React, { Component } from 'react';
import video1 from './img/Video1.mp4';
import "./VideoCard.css";

export class VideoCard extends Component {
    render() {
        return (
            <div calssName="videoCard">
                <video src={video1}
                className="video__player"
                alt="IG reel video"
                loop>
               
                </video>
                
            </div>
        )
    }
}

export default VideoCard
