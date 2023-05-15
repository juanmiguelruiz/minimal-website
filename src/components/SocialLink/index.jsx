import PropTypes from "prop-types";
import * as Styled from "./styles";

const SocialLink = ({link, icon, className}) => (
  <a href={link} target="_blank" className={className} rel="noreferrer">
    <Styled.Icon src={icon} alt="icon" />
  </a>
);

SocialLink.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SocialLink;
