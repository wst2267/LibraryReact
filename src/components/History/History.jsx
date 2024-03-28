import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";

export default function History() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      
      <div className="grid">
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Overgear</div>
          <div className="collapse-content">
            <div className="grid-cols-2">
              <Link to={`/reader/overgear/1`}>
                <span> Overgear ตอนที่ 1 </span>
                <a className="link link-primary">Read</a>
              </Link>
              <br />
              <Link to={`/reader/overgear/2`}>
                <span> Overgear ตอนที่ 2 </span>
                <a className="link link-primary">Read</a>
              </Link>
              <br />
              <Link to={`/reader/overgear/3`}>
                <span> Overgear ตอนที่ 3 </span>
                <a className="link link-primary">Read</a>
              </Link>
              <br />
              <Link to={`/reader/overgear/4`}>
                <span> Overgear ตอนที่ 4 </span>
                <a className="link link-primary">Read</a>
              </Link>
              <br />
              <Link to={`/reader/overgear/5`}>
                <span> Overgear ตอนที่ 5 </span>
                <a className="link link-primary">Read</a>
              </Link>
            </div>
          </div>
        </div>

        {/* mock up history */}
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Nano Machine</div>
          <div className="collapse-content">
            <div className="grid-cols-2">
              <Link to={`/reader/overgear/1`}>
                <span> Nano Machine ตอนที่ 1 </span>
                <a className="link link-primary">Read</a>
              </Link>
              <br />
              <Link to={`/reader/overgear/2`}>
                <span> Nano Machine ตอนที่ 2 </span>
                <a className="link link-primary">Read</a>
              </Link>
              <br />
              <Link to={`/reader/overgear/3`}>
                <span> Nano Machine ตอนที่ 3 </span>
                <a className="link link-primary">Read</a>
              </Link>
              <br />
              <Link to={`/reader/overgear/4`}>
                <span> Nano Machine ตอนที่ 4 </span>
                <a className="link link-primary">Read</a>
              </Link>
              <br />
              <Link to={`/reader/overgear/5`}>
                <span> Nano Machine ตอนที่ 5 </span>
                <a className="link link-primary">Read</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
