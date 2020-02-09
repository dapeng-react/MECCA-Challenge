import React from 'react';
import PropTypes from 'prop-types';

const Iphone = ({ iphone }) => {
  const {
    id,
    name,
    color,
    capacity,
    price,
  } = iphone;
  return (
    <div className="iphone">
      <span>{id}</span>
      <span>{name}</span>
      <span>{color}</span>
      <span>{capacity}</span>
      <span>{price}</span>
    </div>
  );
};

Iphone.propTypes = {
  iphone: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Iphone;
