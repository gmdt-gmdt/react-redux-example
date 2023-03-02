import { configureStore } from "@reduxjs/toolkit";

import pictureReducer from "./picture-slice";

export default configureStore({
  reducer: {
    pictures: pictureReducer,
  },
});
