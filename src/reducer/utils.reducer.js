import { PERSONS } from "../pages/header/data";
import { LOADER } from "../utils";

const utilsReducerDefaultState = {
  poi: PERSONS[0],
  selectedTweet: 0,
  loader: LOADER,
  reloadState: false,
};

const utilsReducer = (
  state = utilsReducerDefaultState,
  { type, poi, tweetNumber, loadState }
) => {
  switch (type) {
    case "CHANGE_POI":
      return { ...state, poi };
    case "SELECT_TWEET":
      return { ...state, selectedTweet: tweetNumber };
    case "SET_LOADER":
      return { ...state, loader: loadState };
    case "SET_RELOAD_STATE":
      return { ...state, reloadState: loadState };
    default:
      return state;
  }
};

export default utilsReducer;
