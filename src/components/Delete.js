import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePictureFromAPI } from "../store/picture-actions";

const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePictureFromAPI(id));
  };
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;
