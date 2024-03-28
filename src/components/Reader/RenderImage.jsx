import PropTypes from "prop-types";

export default function RenderImage({ imageURL }) {
  return (
      <div className="flex items-center justify-center">
        <img src={imageURL} width="50%" />
      </div>
  );
}
RenderImage.propTypes = {
  imageURL: PropTypes.string
};
