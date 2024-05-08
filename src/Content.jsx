import React from "react";

const Content = (props) => {
  return (
    <>
      <div className="content">
        <h4 className="heading1">
          Chaldean Name Numerology Reading Of: {props.data2.input}{" "} :-
          <span className="heading-span">{props.data2.outputArray}</span>
        </h4>
        <h5>
          Compound name/number -{" "}
          <span className="span1">{props.data2.compound_num}</span>
        </h5>
        <p>
          {" "}
          <strong>Destiny number-</strong>The Expression number which describes
          who you are, and what you are, or what you become.
        </p>
        <h5>
          Destiny number -{" "}
          <span className="span1">{props.data2.destiny_num}</span>
        </h5>
        <p>
          {" "}
          <strong>Soul urge number-</strong> The Heart Desire number which
          describes your inner potentials and inner resources.
        </p>
        <h5>
          Soul number - <span className="span1">{props.data2.soul_num}</span>
        </h5>
        <p>
          {" "}
          <strong>Dream number-</strong> The Personality number which describes
          personality, indeed your first impression on others
        </p>
        <h5>
          {" "}
          Name Dream/Personality Number -{" "}
          <span className="span1">{props.data2.dream_num}</span>
        </h5>
      </div>
    </>
  );
};

export default Content;
