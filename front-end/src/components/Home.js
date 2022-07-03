import { useEffect, useState } from "react";
import axios from "axios";

const Home = (props) => {
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
        <button onClick={() => props.handleAddtoCart(electronic)}>
          Add to Cart
        </button>
      </ul>
    );
  });

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-tech-2022-1643751399.jpg"
          alt="home image"
        />
      </div>
      {displayItems}
    </div>
  );
};

export default Home;
