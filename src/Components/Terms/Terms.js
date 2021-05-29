import React from "react";
import { Section } from "./style";
import { termsData } from "../../lib/app_constant";

const Terms = (props) => {
  return (
    <div className="container">
      <Section>
        <h2>{termsData.heading}</h2>
        <ul>
          {termsData &&
          termsData.data &&
          Array.isArray(termsData.data) &&
          termsData.data.length > 0
            ? termsData.data.map((item, idx) => (
                <li key={idx}>
                  <span>{idx + 1}.&nbsp;</span>
                  {item}
                  {idx === 7 || idx === 8 ? <a href="#">Amazon's T&C</a> : ""}
                </li>
              ))
            : ""}
        </ul>
      </Section>
    </div>
  );
};

export default Terms;
