import React from 'react';
import YouTube from 'react-youtube';
import useMediaQuery from "../../hooks/useMediaQuery";


const LiveVideo = ({ videoId }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const opts = {
    height: '300',
    width: '400',
    playerVars: {
      // Add any additional player variables as needed
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default LiveVideo;
