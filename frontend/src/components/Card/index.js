import React from 'react';
import PropTypes from 'prop-types';
import {
  FaMapMarker,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFax
} from 'react-icons/fa';

export default function CardAddresses({ addressInfo }) {
  return (
    <div className='e-box --d-cursor-pointer'>
      <p className='--d-text-sm --d-color-gray mb-2'>{addressInfo.label}</p>
      <p className='--d-text-md --d-fw-600 mb-2'>
        {`${addressInfo.name} ${addressInfo.code ? ` - ${addressInfo.code}` : ''}`}
      </p>

      <div className='d-flex justify-content-start align-items-start mb-3'>
        <FaMapMarker className='--d-icon-sm --d-color-gray mr-1' />
        <p className='--d-text-sm'>{addressInfo.address}</p>
      </div>
      <div className='d-flex align-items-center mb-3'>
        <FaUser className='--d-icon-sm --d-color-gray mr-1' />
        <p className='--d-text-sm'>{addressInfo.contact.name}</p>
      </div>
      <div className='d-flex align-items-center mb-3'>
        <FaEnvelope className='--d-icon-sm --d-color-gray mr-1' />
        <p className='--d-text-sm'>
          {addressInfo.contact.email}
        </p>
      </div>

      <div className='d-flex'>
        <FaPhone className='--d-icon-sm --d-color-gray mr-1' />
        <p className='--d-text-sm mr-3'>{addressInfo.contact.phone}</p>
        <FaFax className='--d-icon-sm --d-color-gray mr-1' />
        <p className='--d-text-sm mr-3'>{addressInfo.contact.fax}</p>
      </div>
    </div>
  );
}

CardAddresses.defaultProps = {
  addressInfo: PropTypes.object
};

CardAddresses.propTypes = {
  addressInfo: PropTypes.shape({
    address: PropTypes.string,
    code: PropTypes.string,
    contact: PropTypes.shape({
      email: PropTypes.string,
      fax: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string
    }),
    label: PropTypes.string,
    name: PropTypes.string
  })
};
