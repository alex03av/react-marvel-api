import { Link } from "react-router-dom";

function Heros({ supers, rutesHeros }) {
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
        : ""}
    </div>
  );
}

export default Heros;
