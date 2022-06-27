import React from "react";
import { Header, Section } from "./components";
import { jobs, education } from "./data";
import * as Styled from "./styles";

const CV = () => (
  <Styled.Container>
    <Header />
    <hr />
    <Section title="Experience" data={jobs} />
    <hr />
    <Section title="Education" data={education} />
    <Styled.Footer />
  </Styled.Container>
);

export default CV;
