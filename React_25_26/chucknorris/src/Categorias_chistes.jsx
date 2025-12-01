import { useState, useEffect } from "react";

function Categorias_chistes({ handler }) {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategorias] = useState([]);

  const [selectedCategory, setselectdCategory] = useState("");

  useEffect(() => {
    async function fetchCategorias() {
      try {
        let res = await fetch("https://api.chucknorris.io/jokes/categories");
        let array_category = await res.json();

        setCategorias(array_category);
        setIsLoading(false);

        if (array_category.lenght > 0) {
          setselectedCategory(array_category[0]);
          handler(selectedCategory);
        }
      } catch (e) {
        alert("Error: ", e);
      }
    }

    if (isLoading) {
      fetchCategorias();
    }
  }, [isLoading]);

  if (isLoading) {
    return <h1>Cargando....</h1>;
  }
  return (
    <>
      <select
        name="categoriaChsites"
        onChange={(e) => {
          setselectdCategory(e.target.value);
          handler(e.target.value);
        }}
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default Categorias_chistes;
