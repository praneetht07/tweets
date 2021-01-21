export const changePoi = ({ poi }) => ({
  type: "CHANGE_POI",
  poi,
});

export const selectTweet = (tweetNumber) => ({
  type: "SELECT_TWEET",
  tweetNumber,
});

export const setLoader = (state) => ({
  type: "SET_LOADER",
  loadState: state,
});
