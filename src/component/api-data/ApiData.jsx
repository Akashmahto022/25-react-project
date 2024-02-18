import React, { useEffect, useState } from "react";

const ApiData = () => {
  const [loading, setLoading] = useState(false);
  const [categorie, setCategorie] = useState([]);

  async function callApi() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();

      if (data && data.categories && data.categories.length) {
        console.log(data);
        setCategorie([...data.categories]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    callApi();
  }, []);

  if (loading) {
    return <div>loading data</div>;
  }

  return (
    <div>
    <div>

     {categorie.map((item)=>(
        <div key={item.idCategory}>
        <div>
            <h1>{item.strCategory}</h1>
        </div>
            <div>
                <button>Add</button>
            </div>
        </div>
     ))}
    </div>
    </div>
  );
};

export default ApiData;
