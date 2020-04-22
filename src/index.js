import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import Greeting from "./Greeting";
import NumSign from "./NumSign";
import "./index.css";

function SuperLemon() {
  return (
    <div className="nonsense">
      <Greeting name="fabinppk" />
      <Message />
      <div>
        <NumSign number="15" capture="number" />
        <NumSign number="30" capture="squared" />
      </div>
    </div>
  );
}

SuperLemon.propTypes = {
  name: PropTypes.string,
};

export default { SuperLemon, Message, Greeting, NumSign };
