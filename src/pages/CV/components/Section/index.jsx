import PropTypes from "prop-types";
import { Item } from "./components";
import * as Styled from "./styles";

const Section = ({ title, data }) => (
  <>
    <Styled.Title>{title}</Styled.Title>
    <Styled.Container>
      {data.map((job) => (
        <Item
          key={job.company}
          image={job.image}
          company={job.company}
          position={job.position}
          location={job.location}
          date={job.date}
        />
      ))}
    </Styled.Container>
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
};

export default Section;
