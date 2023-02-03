import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function OneHeros({ supers, IDP }) {
  const [select, setSelect] = useState([]);

  const IdKey = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  useEffect(() => {
    IDP != null
      ? setSelect(
          supers.data.results.find((id) => {
            return id.id == IDP;
          })
        )
      : [0];
  }, [supers, select]);

  return (
    <>
      {select.length != 0 ? (
        <div className="personaje">
          {" "}
          <h1>{select.name.toUpperCase()}</h1>
          <div className="caratula">
            <img
              src={select.thumbnail.path + "." + select.thumbnail.extension}
              alt={"Imagen De " + select.name}
            />
            <div className="descricion">
              <h4>Description</h4>
              <p>
                {select.description.length != 0 ? (
                  select.description
                ) : (
                  <b className="not">"Sorry, Does Not Have A Description"</b>
                )}
              </p>
            </div>{" "}
          </div>
          <div className="info">
            <div className="comics">
              <h4>Comics</h4>
              <ul>
                {" "}
                {select.comics.items.map((x) => (
                  <li key={IdKey()}>{x.name}</li>
                ))}{" "}
              </ul>
            </div>
            <div className="storis ">
              <h4>Storis</h4>
              <ul>
                {select.stories.items.map((x) => (
                  <li key={IdKey()}>{x.name}</li>
                ))}{" "}
              </ul>
            </div>{" "}
            <div className="series ">
              <h4>Series</h4>
              <div>
                <ul>
                  {select.series.items.map((x) => (
                    <li key={IdKey()}>{x.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="series">
              <h4>Events</h4>
              <div>
                <ul>
                  {select.events.items.map((x) => (
                    <li key={IdKey()}>{x.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <span className="otros">
            <Link to={`/characters`}>VOLVER</Link>
          </span>
        </div>
      ) : (
        <span>
          <Link to="/panel">VOLVER</Link>
        </span>
      )}
    </>
  );
}

export default OneHeros;
//aqui
