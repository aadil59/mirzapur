import React from "react";
import { charactersListData } from "../../lib/app_constant";
import { Section, Heading, CharacterList, Row, Col } from "./style";
import Card from "./Card";

const CharactersList = (props) => {
  return (
    <div className="container">
      <Section>
        <Heading>
          <h2>{charactersListData.heading}</h2>
          <p>{charactersListData.desc}</p>
        </Heading>
        <CharacterList>
          <Row>
            {charactersListData &&
            charactersListData.data &&
            Array.isArray(charactersListData.data) &&
            charactersListData.data.length > 0
              ? charactersListData.data.map((item, idx) => (
                  <Col key={idx}>
                    <Card data={item} />
                  </Col>
                ))
              : ""}
          </Row>
        </CharacterList>
      </Section>
    </div>
  );
};

export default CharactersList;
