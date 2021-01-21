import React from "react";
import { connect } from "react-redux";

const Display = ({ person }) => {
  return (
    <div className="display">
      <div className="u-margin-top-medium">
        <figure className="display__shape">
          <img
            className="display__img"
            src={`assets/images/${person.pic}.jpg`}
            alt="Selected twitter person"
          />
        </figure>
      </div>
      <div>
        <div className="display__followers">
          <div className="display__follower">
            <span className="display__follower--count">{person.following}</span>
            <span className="display__follower--text">Following</span>
          </div>
          <div className="display__follower">
            <span className="display__follower--count">{person.follower}</span>
            <span className="display__follower--text">Followers</span>
          </div>
        </div>
      </div>
      <div className="display__handle">{person.handle}</div>
      <div className="display__info row">
        <span className="display__info--icon display__info--icon-1 col-1-of-7">&nbsp;</span>
        <span className="display__info--text col-6-of-7">{person.status}</span>
      </div>
      <div className="display__info row">
        <span className="display__info--icon display__info--icon-2 col-1-of-7">&nbsp;</span>
        <span className="display__info--text col-6-of-7">{person.location}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  person: state.utils.poi,
});

export default connect(mapStateToProps)(Display);
