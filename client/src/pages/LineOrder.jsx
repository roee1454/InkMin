import React, { useEffect } from "react";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CircleArrowDownButton } from "../components/CircleButton";
import TransitionDiv from "../components/TransitionDiv";
import "../css/orderline.css";

export default function LineOrder() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <TransitionDiv className="line-order-wrapper">
      <section className="section1" id="1">
        <span className="checkMark"><FiCheck /></span>
        <h1>אז איך קובעים תור</h1>
        <CircleArrowDownButton href="#2" />
      </section>
      <section className="section2" id="2">
        Section2
      </section>
    </TransitionDiv>
  );
}
