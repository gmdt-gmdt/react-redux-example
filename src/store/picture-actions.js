import axios from "axios";
import {
  addPicture,
  deletePicture,
  editPicture,
  setPictureData,
} from "./picture-slice";
export const getPicturesDataFromAPI = () => {
  return async (dispatch) => {
    const getPictures = async () => {
      const { data } = await axios.get("http://localhost:5000/pictures");
      return data;
    };
    try {
      const pictures = await getPictures();
      dispatch(setPictureData(pictures));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deletePictureFromAPI = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete("http://localhost:5000/pictures/" + id);
      dispatch(deletePicture(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addPictureFromAPI = (data) => {
  return async (dispatch) => {
    try {
      const { data: picture } = await axios.post(
        "http://localhost:5000/pictures",
        data
      );
      dispatch(addPicture(picture));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editPictureFromAPI = (id, data) => {
  return async (dispatch) => {
    try {
      const { data: picture } = await axios.put(
        `http://localhost:5000/pictures/${id}`,
        data
      );
      dispatch(editPicture(picture));
    } catch (error) {
      console.error(error);
    }
  };
};
