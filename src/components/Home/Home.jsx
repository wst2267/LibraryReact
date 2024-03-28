import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  async function FetchData() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://expressapi-d1vx.onrender.com/Getlibrary"
      );
      setItems(response.data);
      setIsLoading(false);
    } 
    catch (exception) {
      setIsLoading(false);
      console.log("error: ", exception);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
      {!isLoading && (
        <div>
          <div>
            <Navbar />
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center mt-5">
            {items.map((data, index) => {
              return (
                <div key={index} className="card w-96 bg-base-100 shadow-xl mb-10">
                <figure>
                  <img
                    style={{ height: 400 }}
                    src={data.TitleImage}
                    className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                    alt="Louvre"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title"> {data.DisplayName} </h2>
                  <div>
                    <p className="badge badge-primary">Manhwa</p>
                    <p className="badge badge-accent">Ongoing</p>
                    <p>
                      ซอมบี้วิบัติได้เริ่มต้นขึ้นแล้ว…!
                      ผู้รอดชีวิตต่างค้นหาวิธีผ่อนคลายความเครียดเมื่อเผชิญกับความตาย…!
                    </p>
                  </div>

                  <div className="card-actions justify-end">
                    <Link to={`/select/${data.Name}`} state={{ TitleImage: data.TitleImage, Episodes: data.Episode, Name: data.Name }}>
                      <button className="btn btn-primary">Read</button>
                    </Link>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  );
}
