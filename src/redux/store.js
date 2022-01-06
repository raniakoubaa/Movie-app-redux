import { createStore } from "redux";
import rootReduce from "./reducer";

const Devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store=createStore(rootReduce,Devtools)
export default store