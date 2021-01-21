const tweetsReducerDefaultState = [];

const tweetsReducer = (state = tweetsReducerDefaultState, { type, tweets }) => {
  switch (type) {
    case "ADD_TWEETS":
      return [...tweets];
    default:
      return state;
  }
};

export default tweetsReducer;