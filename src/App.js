import { useEffect } from "react";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { useDispatch, useSelector } from "react-redux";
import { getPicturesDataFromAPI } from "./store/picture-actions";

const App = () => {
  const pictures = useSelector((state) => state.pictures.pictures);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPicturesDataFromAPI());
  }, [dispatch]);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form />
      <div className="cards-container">
        {pictures?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
