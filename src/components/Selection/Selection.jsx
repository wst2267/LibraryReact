import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar.jsx";

export default function Selection() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={location.state.TitleImage}
            alt="Album"
            style={{ height: "600px" }}
          />
        </figure>
        <div className="card-body" style={{ height: "600px" }}>
          <div className="overflow-y-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>Chapter</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {location.state.Episodes.map((data, index) => {
                  return (
                    <tr key={index} className="hover">
                      <td>
                        <span>ตอนที่ </span> {data.EpisodeNo}
                      </td>
                      <td>
                        <Link
                          to={`/reader/${location.state.Name}`}
                          state={{
                            Name: location.state.Name,
                            EpisodeNo: data.EpisodeNo,
                            EpisodeDetails: data.Detials,
                            AllEpisode: location.state.Episodes
                          }}
                        >
                          <button className="btn btn-wide btn-block btn-primary"> อ่าน </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
Selection.propTypes = {
  titleThump: PropTypes.string,
};
