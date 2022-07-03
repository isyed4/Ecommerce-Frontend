import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(item.name);
  };

  useEffect(() => {
    getReq();
  }, []);

  const getReq = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/electronics/");
      console.log(response.data);
      setItem(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  const displayItems = item.map((electronic) => {
    return (
      <ul className="displayItems">
        <li>{electronic.name}</li>
        <li>{electronic.price}</li>
        <li>{electronic.rating}</li>
        <img src={electronic.image_url} alt="electronic image" />
      </ul>
    );
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={search}
          type="text"
          placeholder="look for electronics"
        />
        <input type="submit" value="Search" />
      </form>
      {displayItems}
    </>
  );
};

export default Home;
