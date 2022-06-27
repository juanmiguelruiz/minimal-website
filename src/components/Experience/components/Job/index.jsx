import React from 'react';
import PropTypes from 'prop-types';

const Job = ({image, company, position, date, location}) =>{
    return (
        <div className="col s12 m4 experience__job">
            <img className="experience__job__image" width="110px" height="118px" src={image} alt="company_image"/>
            <p className="experience__job__company">{company}</p>
            <p className="experience__job__position">{position}</p>
            <p className="experience__job__date">{date}</p>
            <p className="experience__job__date">{location}</p>
        </div>

    );
}

Job.propTypes={
    image: PropTypes.string,
    company: PropTypes.string,
    position: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string
}


export default Job;