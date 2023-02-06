import "./App.css";
import React from "react";
import Nav from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import OneHeros from "./components/OneHeros";
import Heros from "./components/Heros";
import OneComics from "./components/OneComics";
import Home from "./components/Home";
import ERRORPAGE from "./components/ERRORPAGE";
import Cargando from "./components/Cargando";
import Footer from "./components/Footer";
function App() {
  const [supers, setSupers] = useState([]);
  const [rutesheros, setRutesheros] = useState(null);
  const [linkData, setLinkData] = useState("");
  const [carga, setCarga] = useState(null);
  const [superBusqueda, setSuperBusqueda] = useState([]);

  useEffect(() => {
    if (!!linkData.length) {
      fetch(
        ` https://gateway.marvel.com:443/v1/public/${linkData}?ts=1&apikey=2613e815ec9ace5820e36c04aade2e85&hash=f24294dba5fb86f0df436bcb33db161b`
      )
        .then((res) => res.json())
        .then((res) => {
          setSupers(res);
        })
        .finally(() => {
          setCarga(true);
        });
    }
  }, [linkData]);
  useEffect(() => {
    if (linkData !== "") {
      setCarga(null);
    }
  }, [linkData]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          setLinkData={setLinkData}
          linkData={linkData}
          rutesHeros={setRutesheros}
          supers={setSuperBusqueda}
          long={supers}
        />
        {carga !== true && linkData !== "" ? <Cargando /> : ""}

        <Routes>
          <Route
            path={"react-marvel-api/" + linkData + "/" + rutesheros}
            element={
              linkData !== "characters" ? (
                <OneComics
                  supers={supers}
                  IDP={rutesheros}
                  linkData={linkData}
                />
              ) : (
                <OneHeros supers={supers} IDP={rutesheros} />
              )
            }
          />
          <Route
            path={"react-marvel-api/" + linkData + "/" + rutesheros + "/search"}
            element={
              linkData !== "characters" ? (
                <OneComics
                  supers={superBusqueda}
                  IDP={rutesheros}
                  linkData={linkData}
                />
              ) : (
                <OneHeros supers={superBusqueda} IDP={rutesheros} />
              )
            }
          />
          <Route
            path="react-marvel-api/"
            element={<Home setLinkData={setLinkData} />}
          />
          <Route
            path="react-marvel-api/characters"
            element={<Heros supers={supers} rutesHeros={setRutesheros} />}
          />
          <Route
            path="react-marvel-api/series"
            element={<Heros supers={supers} rutesHeros={setRutesheros} />}
          />
          <Route
            path="react-marvel-api/comics"
            element={<Heros supers={supers} rutesHeros={setRutesheros} />}
          />
          <Route
            path="react-marvel-api/creators"
            element={<Heros supers={supers} rutesHeros={setRutesheros} />}
          />
          <Route
            path="react-marvel-api/events"
            element={<Heros supers={supers} rutesHeros={setRutesheros} />}
          />{" "}
          <Route
            path="react-marvel-api/stories"
            element={<Heros supers={supers} rutesHeros={setRutesheros} />}
          />
          <Route path="*" element={<ERRORPAGE valor={superBusqueda} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
