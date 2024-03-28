import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import ReaderArea from "./components/ReaderArea/ReaderArea.jsx";

export default function App() {
  const location = useLocation();
  const [isLoad, setIsload] = useState(true);


  useEffect(()=>{
    //console.log("App load")
    setIsload(true)
    setIsload(false)
}, [location]);

  return isLoad == true ? <> Loading </> : (
    <>
      <Navbar />
      <ReaderArea episodeDetails={location.state.episodeDetails} />
    </>
  );
}
