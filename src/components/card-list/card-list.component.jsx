import React, { Component } from "react";
import { useState, useEffect } from "react";
import Card from "../card/card.component.jsx";
import "./card-list.styles.css";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return <Card monsters={monsters} />;
//   }
// }

const Cardlist = ({ monsters }) => <Card monsters={monsters} />;

export default Cardlist;
