import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itinDatum = this.props.itinDatum;
    const index = this.props.index;
    const name = itinDatum.name,
      city = itinDatum.city;

    return (
      <li key={index.toString()}> <Link to={`/itineraries/${itinDatum.id}`}>
          <p>
            {name}, {city}
          </p>
        </Link>
      </li>
    );
  }
}

export default MenuItem;