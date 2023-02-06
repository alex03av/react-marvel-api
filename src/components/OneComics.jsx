import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function OneComics({ supers, IDP, linkData }) {
  const [select, setSelect] = useState([]);
  const IdKey = () => Math.floor(Math.random() * 100);
  useEffect(() => {
    IDP != null
      ? setSelect(
          supers.data.results.find((id) => {
            return id.id == IDP;
          })
        )
      : select([]);
  }, [supers, select]);

  return (
    <>
      {select.length != 0 ? (
        <div className="OneComics">
          <div className="HeaderComics">
            <h2>
              {linkData != "creators"
                ? select.title.toUpperCase()
                : select.firstName.toUpperCase()}
            </h2>
            <img
              src={
                select.thumbnail !== null
                  ? select.thumbnail.path + "." + select.thumbnail.extension
                  : `\src\img\no marvel.jpg`
              }
              alt=""
            />
            <p>
              {select.description ? (
                select.description
              ) : (
                <b className="not">"Sorry😞, Does Not Have A Description"</b>
              )}
            </p>
          </div>

          {linkData !== "comics" ? (
            ""
          ) : (
            <div className="detalles">
              <span>
                <b>Format :</b> {select.format}
              </span>
              <span>
                <b>Precio:</b> {select.prices[0].price}$
              </span>
            </div>
          )}
          {linkData !== "creators" ? (
            <>
              {" "}
              <div className="one supersone">
                <h5>Characters That Participation</h5>{" "}
                {select.characters.items.length != 0 ? (
                  select.characters.items.map((x) => {
                    return <p key={IdKey() + "56569"}>{x.name}</p>;
                  })
                ) : (
                  <b className="not">Sorry, You Don't Have An Events</b>
                )}
              </div>
              <div className="creators">
                <h5>Creadores</h5>
                <ul>
                  <li>
                    <span>Name</span>
                    <span>Role</span>
                  </li>
                  {select.creators.items.map((creador) => {
                    return (
                      <li key={IdKey()}>
                        <span className="creo" key={IdKey() + "5577"}>
                          {" "}
                          {creador.name}{" "}
                        </span>{" "}
                        <span className="role" key={IdKey() + "4587"}>
                          {" "}
                          {creador.role}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
          {linkData !== "stories" ? (
            <div className="one Storiesone">
              <h5>Stories</h5>
              <ul>
                {" "}
                {select.stories.items.length != 0 ? (
                  select.stories.items.map((storie) => {
                    return <li key={IdKey() + "4547"}>{storie.name}</li>;
                  })
                ) : (
                  <b className="not">Sorry, You Don't Have An Stories</b>
                )}
              </ul>
            </div>
          ) : (
            ""
          )}

          {linkData !== "comics" ? (
            <div className="one comicsone">
              <h5>Comics</h5>
              <ul>
                {select.comics.items.length != 0 ? (
                  select.comics.items.map((storie) => {
                    return <li key={IdKey() + "1425"}>{storie.name}</li>;
                  })
                ) : (
                  <b className="not">Sorry, You Don't Have An comics</b>
                )}
              </ul>
            </div>
          ) : (
            ""
          )}

          {linkData !== "events" ? (
            <div className="one eventssone">
              <h5>Events</h5>
              <ul>
                {select.events.items.length != 0 ? (
                  select.events.items.map((storie) => {
                    return <li key={IdKey() + "568"}>{storie.name}</li>;
                  })
                ) : (
                  <b className="not">Sorry, You Don't Have An Events</b>
                )}
              </ul>
            </div>
          ) : (
            ""
          )}

          <div className="one seriesone">
            {linkData !== "series" && linkData !== "comics" ? (
              <>
                {" "}
                <h5>Series</h5>
                <ul>
                  {" "}
                  {select.series.items.length != 0 ? (
                    select.series.items.map((storie) => {
                      return <li key={IdKey() + "125"}>{storie.name}</li>;
                    })
                  ) : (
                    <b className="not">Sorry, You Don't Have An Series</b>
                  )}
                </ul>{" "}
              </>
            ) : linkData !== "series" ? (
              <>
                {" "}
                <h5>Series</h5>
                <ul>
                  <li>{select.series.name}</li>
                </ul>
              </>
            ) : (
              ""
            )}
          </div>

          <span className="otros">
            <Link to={`/react-marvel-api/${linkData}`}>VOLVER</Link>
          </span>
        </div>
      ) : (
     ''
      )}
    </>
  );
}

export default OneComics;
/** */
