import PropTypes from "prop-types";
import { useEffect } from "react";

export default function RenderCanvas({  Id, imageURL, canvasScript }) {

  useEffect(()=>{
    var script = document.createElement('script');
    script.innerHTML = canvasScript
    document.body.appendChild(script);
  },[canvasScript]);

  
  return Id == "" ? <></> : (
    <>
      <div className="flex items-center justify-center">
        <canvas className="max-w-lg max-w-md max-w-sm max-w-xs" style={{display: "block", margin: 0}} data-url={imageURL} id={Id} width="1000" height="2459"></canvas>
      </div>
      
    </>
  );
}

RenderCanvas.propTypes = {
  Id: PropTypes.string,
  imageURL: PropTypes.string,
  canvasScript: PropTypes.string
};
