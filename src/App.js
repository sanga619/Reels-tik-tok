import React from 'react';
import './App.css';
import VideoCard from './VideoCard';
function App() {
  return (
    <div className="app" >
      <div className="app__top">
       { /* image at top */ }
       <img className="img__logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt=""
        >
       </img>
       <h1>Reels </h1>

        { /* Reela text */}
      </div>
      <div className="app__videos">
        {/*container of app__video */}
        {/*Video */}
         <VideoCard/>
        {/*Video */}
        {/*Video */}
        {/*Video */}
        {/*Video */}
      </div>
    </div>
  );
}
export default App;
