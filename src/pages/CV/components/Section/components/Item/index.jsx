import PropTypes from "prop-types";
import * as Styled from "./styles";

const Job = ({ image, company, position, date, location }) => (
  <Styled.Job className="col s12 m4">
    <Styled.JobImage
      width="110px"
      height="118px"
      src={image}
      alt="company_image"
    />
    <Styled.JobInfo size="20" fontWeight="bold">
      {company}
    </Styled.JobInfo>
    <Styled.JobInfo size="18" fontWeight="normal">
      {position}
    </Styled.JobInfo>
    <Styled.JobInfo size="16" fontWeight="normal" color="#a8a8a8">
      {date}
    </Styled.JobInfo>
    <Styled.JobInfo size="14" fontWeight="normal" color="#a8a8a8">
      {location}
    </Styled.JobInfo>
  </Styled.Job>
);

Job.propTypes = {
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  position: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
};

export default Job;
