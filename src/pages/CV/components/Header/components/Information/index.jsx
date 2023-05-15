import PropTypes from "prop-types";
import * as Styled from "./styles";

const Information = ({ name, position, email }) => (
  <>
    <Styled.Name>{name}</Styled.Name>
    <Styled.Info>{position}</Styled.Info>
    <Styled.Info>{email}</Styled.Info>
  </>
);

Information.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  email: PropTypes.string,
};

export default Information;
