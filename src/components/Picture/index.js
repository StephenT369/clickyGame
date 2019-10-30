import React from "react";
import "./style.css";

const Picture = props => (
<div className="card" div key={props.id} onClick={() => props.handleClick(props.id, props.clicked)}>
<div className="img-container wrapper">
  <img id ={props.id} src={props.image} alt={props.image} />
</div>
</div>
);

export default Picture;
