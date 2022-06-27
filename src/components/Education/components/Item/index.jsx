import React from 'react';
import PropTypes from 'prop-types';

const Item = ({image, university, degree, date, location}) =>{
    return (
        <div className="col s12 experience__job">
            <img className="experience__job__image us" src={image} alt="company_image"/>
            <p className="experience__job__company">{university}</p>
            <p className="experience__job__position">{degree}</p>
            <p className="experience__job__date">{date}</p>
            <p className="experience__job__date">{location}</p>
        </div>

    );
}

Item.propTypes={
    image: PropTypes.string,
    university: PropTypes.string,
    degree: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string
}


export default Item;