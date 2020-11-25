import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaEye, FaPhone, FaFax, FaReply } from 'react-icons/fa';

export default function Supplier({ supplierInfo }) {
  return (
    <div className='e-box --transition-off'>
      <div className='col-12 col-sm-12 col-md-12 col-lg-4 mb-3'>
        <p className='--d-color-gray --d-text-sm'>Supplier</p>
        <p className='--d-color-primary --d-fw-600 --d-text-md'>
          {supplierInfo.name}
        </p>
      </div>

      <div className='row justify-content-between align-items-center'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
          <p className='--d-text-sm'>{supplierInfo.document.value}</p>
        </div>

        <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
          <div className='d-flex align-items-center'>
            <FaUser className='--d-icon-md --d-color-gray mr-1' />
            <p className='--d-text-sm'>
              {`${supplierInfo.contact.name}`} -{' '}
              <span className='--d-color-primary'>
                {supplierInfo.contact.email}
              </span>
            </p>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
          <div className='d-flex align-items-center'>
            <FaEye className='--d-icon-md --d-color-gray mr-1' />
            <p className='--d-text-sm'>{supplierInfo.readAt}</p>
          </div>
        </div>
      </div>
      <div className='row justify-content-between align-items-center'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
          <p className='--d-text-sm'>{supplierInfo.address}</p>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
          <div className='d-flex align-items-center'>
            <FaPhone className='--d-icon-md --d-color-gray mr-1' />
            <p className='--d-text-sm'>{`${supplierInfo.contact.phone}`}</p>
            <FaFax className='--d-icon-md --d-color-gray mr-1' />
            <p className='--d-text-sm'>{`${supplierInfo.contact.fax}`}</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className='d-flex align-items-center'>
            <FaReply className='--d-icon-md --d-color-gray mr-1' />
            <p className='--d-text-sm'>{supplierInfo.readAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Supplier.defaultProps = {
  supplierInfo: PropTypes.object
};

Supplier.propTypes = {
  supplierInfo: PropTypes.shape({
    address: PropTypes.string,
    code: PropTypes.string,
    contact: PropTypes.shape({
      email: PropTypes.string,
      fax: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string
    }),
    document: PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.string
    }),

    lastReplyAt: PropTypes.string,
    name: PropTypes.string,
    readAt: PropTypes.string
  })
};
