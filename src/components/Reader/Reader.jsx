import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import NaviBottom from "../Navbar/NaviBottom.jsx";
import ReaderArea from "../ReaderArea/ReaderArea.jsx";

export default function Reader() {
  const location = useLocation();
  const [isLoad, setIsload] = useState(true);


//   useEffect(()=>{
//     console.log("Reader load: ", location.state.episodeDetails)
//     setIsload(true)
//     setIsload(false)
// }, []);

  return  (
    <>
      {/* <Navbar /> */}
      <ReaderArea episodeDetails={location.state.episodeDetails} />
      {/* <NaviBottom name={location.state.name} episodeNo={location.state.episodeNo} allEpisode={location.state.allEpisode} /> */}

      
    </>
  );
}
