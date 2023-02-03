import { useEffect } from "react";
import { Link ,useLocation} from "react-router-dom";
import ERRORPAGE from './ERRORPAGE'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Heros({ supers, rutesHeros}) {

  const sampleLocation = useLocation();
 
 
  
  return (
    <div className="containerHeros">
      {" "}
      {supers.length != 0
        ? supers.data.results.map((imgenes) => {
            return (
              <div className="hero" key={imgenes.id}>
                <Link
                  to={`${imgenes.id}`}
                  onClick={() => rutesHeros(imgenes.id)}
                >
                  <img
                    src={
                      imgenes.thumbnail !== null
                        ? imgenes.thumbnail.path +
                          "." +
                          imgenes.thumbnail.extension
                        : `/src/img/no marvel.jpg`
                    }
                    alt=""
                  />
                  <h3>
                    {!!imgenes.name
                      ? imgenes.name
                      : !!imgenes.title
                      ? imgenes.title
                      : imgenes.firstName}
                  </h3>{" "}
                  <div className="description">
                    <p>{imgenes.name}</p>
                    <span>
                      {imgenes.description == "" ||
                      imgenes.description == null ? (
                        <b className="not">
                          "Sorry, Does Not Have A Description"
                        </b>
                      ) : (
                        imgenes.description
                      )}
                    </span>{" "}
                  </div>{" "}
                </Link>
              </div>
            );
          })
        : <h1>sexo</h1>}
    </div>
  );
}

export default Heros; /*
 <BrowserRouter>
                  <Routes>
                    <Route path={'/pages'+imgenes.name} element={<h1>inicio</h1>} />
                  </Routes>
                </BrowserRouter>*/
