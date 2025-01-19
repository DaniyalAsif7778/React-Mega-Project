 import { configureStore } from "@reduxjs/toolkit";
 import reducer from "./authslice";

  const  store = configureStore({
 reducer,
}); 

export default store;