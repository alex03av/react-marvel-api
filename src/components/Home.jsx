import { useEffect } from "react";

function Home({ setLinkData }) {
  useEffect(() => {
    setLinkData("");
  }, []);

  return (
    <div className="home">
      <h1>MARVEL UNIVERSE</h1>{" "}
      <p>
        El nombre Marvel es bien conocido entre los lectores de cómics como una
        de las editoriales profesionales más grandes de la industria del cómic
        en América del Norte. Marvel Comics ahora es parte de Disney, habiendo
        adquirido la compañía no hace mucho tiempo, creando algunos de los
        personajes más queridos de la industria sexo. Se remonta a 1939 cuando la
        empresa era conocida como Timely Publications. En las primeras décadas
        tuvo diferentes nombres.
      </p>
      <img src="src\img\marvelimg.png" alt="" />
      <p>
        Por ejemplo, en la década de 1950 se llamaba Atlas Comics. Estos años no
        fueron particularmente exitosos para el editor y, a pesar de sus
        intentos por establecerse en este campo, fracasó. Todo eso cambió en
        1961 cuando publicó un cómic que todavía es popular entre lectores de
        todas las edades: Los Cuatro Fantásticos. Estos principios creativos de
        la empresa fueron muy apreciados por artistas como Stan Lee, Steve Ditko
        o Jack Kirby, que siguen vivos y disfrutando de la vida. A los Cuatro
        Fantásticos se unen muchos otros personajes que han ayudado a la
        editorial a lograr un éxito tan grande
      </p>
      <img src="https://static.dw.com/image/52649694_303.jpg" alt="" />
      <p>
        Spider-Man, Capitán América, Iron Man... La lista de superhéroes de
        Marvel es conocida por todas las edades en todo el mundo. La compañía ha
        ganado millones de dólares con todos sus personajes de dibujos animados,
        pero no siempre fue así. Quebraron en los 90...
      </p>
      <img src="src\img\marveles.png" alt="" />
      <p>
        Marvel Comics nació en 1939 como una editorial de cómics de superhéroes,
        fundada por Martin Goodman, que entonces tenía 31 años. Al principio era
        un negocio paralelo para el empresario, otra editorial especializada en
        ficción occidental estadounidense. En los primeros años de su vida,
        Marvel logró un relativo éxito con los cómics de Spider-Man o X-Men, que
        fueron recordados por millones de niños en Estados Unidos
      </p>
      <img src="https://f.rpp-noticias.io/2020/03/31/921504marvel-tierra-2099jpg.jpg" alt="" />
      <p>
        Pero el crecimiento de la industria del cómic se convirtió en una
        burbuja, lo que frenó en gran medida el desarrollo de la empresa.
      </p>
    </div>
  );
}

export default Home;
