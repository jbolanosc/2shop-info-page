import React, { Fragment } from "react";
import Main from "../layout/Main";
import WhySection from "../layout/WhySection";
import Characteristics from "../layout/Characteristics";
import NewsLetter from "../NewsLetter";

export default function index() {
  return (
    <Fragment>
      <Main />
      <WhySection />
      <Characteristics />
      <NewsLetter />
    </Fragment>
  );
}
