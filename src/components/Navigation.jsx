import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Navigation({ rutesHeros, setLinkData, linkData, supers, long }) {
  const sampleLocation = useLocation();

  const [superHeros, setSuperHeros] = useState("");
  const [newheros, setNewheros] = useState("");
  const [params, setParams] = useState([]);
  const DATALINK = {
    series: () => "series?ts=1&title=",
    comics: () => "comics?ts=1&title=",
    characters: () => "characters?ts=1&name=",
    creators: () => "creators?ts=1&firstName=",
    events: () => "events?ts=1&name=",
  };
  const DataLink = (value) => {
    if (value != "") {
      setLinkData(value);
    }
  };

  useEffect(() => {
    let a = sampleLocation.pathname.replaceAll("/", "");
    if (
      a == "comics" ||
      a == "series" ||
      a == "characters" ||
      a == "creators" ||
      a == "events" ||
      a == "stories"
    ) {
      DataLink(
        sampleLocation.pathname
          .replaceAll("/search", "")
          .replaceAll("/", "")
          .replace(/[0-9]/g, "")
      );
    }
  }, []);
  useEffect(() => {
    if (params.length != 0) {
      rutesHeros(null);
    }
  }, []);

  useEffect(() => {
    if (newheros.length != 0) {
      fetch(
        ` https://gateway.marvel.com:443/v1/public/${DATALINK[
          linkData
        ]()}${newheros}&apikey=2613e815ec9ace5820e36c04aade2e85&hash=f24294dba5fb86f0df436bcb33db161b`
      )
        .then((res) => res.json())
        .then((res) => {
          setParams(res.data.results[0].total !== 0 ? res : "");

          supers(res);
          !params.data.results[0].total !== 0 ? rutesHeros(null) : "";
          console.clear();
        });
    }
  }, [newheros]);
  useEffect(() => {
    document.title = `Marvel ${linkData}`;
  }, [linkData]);

  return (
    <>
      <div className="nav-container">
        <div className="nav">
          <header>MARVEL {linkData.toUpperCase()}</header>{" "}
          <img className="spidy" src="src\img\spider.png" alt="" />
          <div className="navList">
            <span>
              <Link onClick={() => DataLink("")} to="/">
                Home
              </Link>{" "}
            </span>
            <span>
              <Link onClick={() => DataLink("characters")} to="characters">
                characters
              </Link>
            </span>
            <span>
              <Link onClick={() => DataLink("comics")} to="comics">
                comics
              </Link>
            </span>{" "}
            <span>
              <Link onClick={() => DataLink("series")} to="series">
                series
              </Link>
            </span>
            <span>
              <Link onClick={() => DataLink("creators")} to="creators">
                creators
              </Link>
            </span>
            <span>
              <Link onClick={() => DataLink("events")} to="events">
                events
              </Link>
            </span>
            <span>
              <Link onClick={() => DataLink("stories")} to="stories">
                stories
              </Link>
            </span>
          </div>
          {linkData.length && linkData !== "stories" ? (
            <div className="Container___form">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewheros(superHeros);
                  e.target.reset();
                }}
              >
                <input
                  type="text"
                  placeholder={`search ${linkData}....`}
                  onChange={(e) => {
                    const valor = e.target.value;
                    valor != "" ? setSuperHeros(valor) : "";
                  }}
                />{" "}
                <button>search</button>
              </form>{" "}
              {!!newheros.length ? (
                params.data ? (
                  <Link
                    className="resul"
                    to={`${linkData}/${params.data.results[0].id}/search`}
                    onClick={() => {
                      rutesHeros(params.data.results[0].id);
                      setNewheros("");
                    }}
                  >
                    {!!params.data.results[0].name
                      ? params.data.results[0].name
                      : !!params.data.results[0].title
                      ? params.data.results[0].title
                      : params.data.results[0].firstName}
                  </Link>
                ) : (
                  <p className="resul">
                    {`no encontramos coicidencia con ${newheros}`}{" "}
                  </p>
                )
              ) : (
                ""
              )}
              {}
            </div>
          ) : (
            <div className="Container___form"></div>
          )}
        </div>
        <div className="copyright"></div>
      </div>
    </>
  );
}

export default Navigation;
/** <div className="copidata">
            <span>©copyright: 2023 MARVEL</span>
            <a href="http://marvel.com\" target="_blank">
              Data provided by Marvel. © 2023 MARVEL
            </a>
          </div> */
