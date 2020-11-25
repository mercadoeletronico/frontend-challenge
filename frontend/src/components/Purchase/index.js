import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/me.svg';

export default function Purchase({ number, serial }) {
  return (
    <div className='e-purchase-header'>
      <div className='d-flex flex-column '>
        <h1 className='text-xl fw-600 color-white mb-2'>Purchase Order</h1>
        <p className='text-xxl fw-600 color-white mb-2'>{number}</p>
        <p className='fw-700'><i>{`SerialME ${serial}`}</i></p>
      </div>
      <div className='__me-logo'>
        <img src={logo} alt='' />
      </div>
    </div>
  );
}

Purchase.defaultProps = {
  number: PropTypes.number,
  serial: PropTypes.number
};
Purchase.propTypes = {
  number: PropTypes.number,
  serial: PropTypes.number
};
