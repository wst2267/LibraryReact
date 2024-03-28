import RenderCanvas from "../Reader/RenderCanvas.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import Navbar from "../Navbar/Navbar.jsx";

export default function ReaderArea() {
  const [isLoading, setIsLoading] = useState(true);
  const [thisState, setthisState] = useState("");
  const [episodeDetails, setEpisodeDetails] = useState([]);

  const [thisIndex, setthisIndex] = useState(0);
  const [name, setName] = useState("");
  const location = useLocation();

  useEffect(() => {
    //setIsLoading(true);
    if (isLoading == true) {
      LoadData();
      setTimeout(function() {
        setIsLoading(false);
      }, 500)

      setIsLoading(false);
    }
  }, [isLoading]);

  const HandleNextChange = () => {
    setthisState("next");
    setIsLoading(true);
  };

  const HandlePrevChange = () => {
    setthisState("prev");
    setIsLoading(true);
  };

  async function LoadData() {
    if (thisState == "next") {
      var nextName = location.state.AllEpisode[thisIndex - 1].EpisodeNo;
      var nextDetail = location.state.AllEpisode[thisIndex - 1].Detials;

      setName(nextName);
      setthisIndex(thisIndex - 1);
      setEpisodeDetails(nextDetail);
    } else if (thisState == "prev") {
      var prevName = location.state.AllEpisode[thisIndex + 1].EpisodeNo;

      setName(prevName);
      setthisIndex(thisIndex + 1);
    } else {
      // first load
      var index = location.state.AllEpisode.findIndex((x) => x.EpisodeNo == location.state.EpisodeNo);
      setthisIndex(index);
      setEpisodeDetails(location.state.EpisodeDetails);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
      {!isLoading && (
        <div>
          <Navbar />
          <div>
            <h3 className="flex items-center justify-center">
              ตอนที่ {thisState == "" ? location.state.EpisodeNo : name}
            </h3>
            {episodeDetails.map((data, index) => {
              return data.Tag == "img" ? (
                <div key={index} className="flex items-center justify-center">
                  <img className="max-w-lg max-w-md max-w-sm max-w-xs" src={data.DataUrl} />
                </div>
              ) : (
                <div key={index}>
                  <RenderCanvas
                    Id={data._id}
                    imageURL={data.DataUrl}
                    canvasScript={data.Script}
                  />
                </div>
              );
            })}
          </div>
          <br />

          <div
            style={{
              position: "fixed",
              right: "0",
              bottom: "0",
              margin: "1rem",
            }}
          >
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
              <li>
                <a onClick={HandlePrevChange}>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      d="M5 12h14M5 12l4-4m-4 4 4 4"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <span>ตอนที่ {thisState == "" ? location.state.EpisodeNo : name}</span>
              </li>
              <li>
                <a onClick={HandleNextChange}>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="currentColor" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
ReaderArea.defaultProps = {
  episodeDetails: [],
};

ReaderArea.propTypes = {
  episodeDetails: PropTypes.array,
};
