import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { aboutTweets } from "../../../actions/tweets.action";
import { selectTweet } from "../../../actions/utils.actions";
import { LIST_HEADER } from "../data";
import Tweets from "./Tweets";

const Lists = ({ person, dispatch, tweets, selected, load, reloadState }) => {
  const [intval, setIntval] = useState(null);
  useEffect(() => {
    if (intval) clearInterval(intval);
    setIntval(null);
    dispatch({
      type: "FETCH_INITIAL_TWEETS",
      subject: person.name,
    });
  }, [person]);

  useEffect(() => {
    if (reloadState) {
      const interval = setInterval(() => {
        dispatch({
          type: "FETCH_TWEETS",
          subject: person.name,
        });
      }, 10000);
      setIntval(interval);
    } else {
      clearInterval(intval);
      setIntval(null);
    }
  }, [reloadState]);
  // useEffect(() => {
  //   // dispatch(aboutTweets(person.name));
  //   setInterval(() => {
  //     dispatch({
  //       type: "FETCH_TWEETS",
  //       subject: person.name,
  //     });
  //   }, 4000);
  // }, [person]);

  const onSelectTweet = (index) => dispatch(selectTweet(index));

  return (
    <div className="lists">
      <div className="lists__header">{LIST_HEADER}</div>
      {load ? (
        <div className="lists__loading">Loading...</div>
      ) : (
        <Tweets
          tweets={tweets}
          selected={selected}
          onSelectTweet={onSelectTweet}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  person: state.utils.poi,
  tweets: state.tweets,
  selected: state.utils.selectedTweet,
  load: state.utils.loader,
  reloadState: state.utils.reloadState,
});

export default connect(mapStateToProps)(Lists);
