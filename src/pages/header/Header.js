import React from "react";
import { connect } from "react-redux";
import { changePoi } from "../../actions/utils.actions";

import { TITLE, PERSONS } from "./data";

const Header = ({ poi, dispatch }) => {
  const onPoiSelected = (person) => dispatch(changePoi({ poi: person }));
  return (
    <div className="header">
      <div className="header__title">{TITLE}</div>
      <div className="header__contents">
        {PERSONS.map((person, idx) => (
          <div
            key={idx}
            className={`${poi.name === person.name && "header__selected"}`}
            onClick={() => onPoiSelected(person)}
          >
            {person.fullName}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  poi: state.utils.poi,
});

export default connect(mapStateToProps)(Header);
