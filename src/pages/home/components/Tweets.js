import React from "react";
import moment from "moment";
import Tick from "../../../utils/icons/Tick";

const Tweets = ({ tweets = [], selected, onSelectTweet }) => (
  <div className="lists__wrapper">
    {tweets.map((tweet, idx) => (
      <div
        key={idx}
        className="lists__tweet"
        onClick={() => onSelectTweet(idx)}
      >
        <div
          className={`lists__tick ${
            selected == idx && "lists__tick--selected"
          }`}
        >
          <Tick className="tick-icon" />
        </div>
        <div>
          <div className="lists__tweet--text">{tweet.text}</div>
          <div className="lists__tweet--created">
            {moment(tweet.created_at).format("DD MMM YYYY")}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Tweets;
