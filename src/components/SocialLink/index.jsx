import PropTypes from "prop-types";
import * as Styled from "./styles";

const SocialLink = ({ link, icon, className }) => (
  <a className={className} href={link}>
    <Styled.Icon icon={icon} />
  </a>
);

SocialLink.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
};

export default SocialLink;
