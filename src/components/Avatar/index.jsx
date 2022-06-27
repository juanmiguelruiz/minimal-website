import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles";

const Avatar = ({ img }) => <Styled.Avatar src={img} alt={img} />;

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Avatar;
