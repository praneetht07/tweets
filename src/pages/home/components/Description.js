import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { selectedTweet } from "../../../selectors/selectedTweet";
import { DESCRIPTION_HEADER } from "../data";

const Description = ({ tweet, load }) => {
  return (
    <div className="description">
      <div className="description__header">{DESCRIPTION_HEADER}</div>
      {tweet && (
        <div className="description__content">
          <div className="a-row">
            <div className="a-col-1-of-2 description__obj">Tweets By:</div>
            <div className="a-col-1-of-2">{tweet?.user.name}</div>
          </div>
          <div className="a-row">
            <div className="a-col-1-of-2 description__obj">Location:</div>
            <div className="a-col-1-of-2">
              {tweet?.user.location
                ? tweet?.user.location
                : "No location given"}
            </div>
          </div>
          <div className="a-row">
            <div className="a-col-1-of-2 description__obj">Tweeted Time:</div>
            <div className="a-col-1-of-2">{tweet?.created_at}</div>
          </div>
          <div className="a-row">
            <div className="a-col-1-of-2 description__obj">Tweet:</div>
            <div className="a-col-1-of-2">{tweet?.text}</div>
          </div>
          <div className="a-row">
            <div className="a-col-1-of-2 description__obj">Hashtag:</div>
            <div className="a-col-1-of-2 description__hashtags">
              {tweet?.entities.hashtags.map((hashtag, idx) => (
                <span key={idx}>{`#${hashtag.text}`}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tweet: selectedTweet(state.tweets, state.utils.selectedTweet),
  load: state.utils.loader,
});

export default connect(mapStateToProps)(Description);
