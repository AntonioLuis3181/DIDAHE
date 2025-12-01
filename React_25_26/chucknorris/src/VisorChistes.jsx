import { useEffect, useState } from "react";
import Categorias_chistes from "./Categorias_chistes";

function VisorChistes() {
  const [isLoading, setIsLoading] = useState(true);
  const [textoChiste, setTextoChiste] = useState("");
  const [selectdCategory, setSelectdCategory] = useState("");

  function handleChange(categoria) {
    setSelectdCategory(categoria);
    setIsLoading(true);
  }

  useEffect(
    () => {
      async function fetchChiste() {
        try {
          let api_url = await fetch(
            "https://api.chucknorris.io/jokes/random?category=${selectedCategory}"
          );
          let res = await fetch(api_url);
          let o_chiste = await res.json();

          setTextoChiste(o_chiste.value);
          setIsLoading(false);
        } catch (e) {
          alert("Error: ", e);
        }
      }

      if (isLoading && selectdCategory != "") {
        fetchChiste();
      }
    },
    [selectdCategory],
    isLoading
  );

  return (
    <>
      <h1>Hecho de Chuck Norris</h1>
      <Categorias_chistes handle={handleChange} />
      {isLoading ? <p>"Cargando...."</p> : <p> {textoChiste}</p>}

      <button onClick={() => setIsLoading(true)}>
        Cargar otro hecho de Chuck Norris
      </button>
    </>
  );
}

export default VisorChistes;
