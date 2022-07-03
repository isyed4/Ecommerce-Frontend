import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [item, setItem] = useState([]);

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
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cms.qz.com/wp-content/uploads/2018/11/mavic-air_flame-red_-1-e1542646586211.jpg?quality=75&strip=all&w=410&h=231"
          alt="home image"
        />
      </div>
      {displayItems}
    </div>
  );
};

export default Home;
