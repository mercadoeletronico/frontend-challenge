import React from "react";
import PropTypes from "prop-types";
import {
  FaMapMarker,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFax,
} from "react-icons/fa";

export default function CardAddresses({ addressInfo }) {
  return (
    <div className="e-box --fixed mb-3">
      <p cy-validation="address-label" className="text-sm color-gray mb-2">
        {addressInfo.label}
      </p>
      <p cy-validation="address-name" className="text-md fw-600 mb-2">
        {`${addressInfo.name} ${
          addressInfo.code ? ` - ${addressInfo.code}` : ""
        }`}
      </p>

      <div className="d-flex justify-content-start align-items-start mb-3">
        <FaMapMarker
          cy-validation="address-icon-map-marker"
          className="icon-md color-gray mr-1"
        />
        <p cy-validation="address-address" className="text-sm">
          {addressInfo.address}
        </p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <FaUser
          cy-validation="address-icon-user"
          className="icon-md color-gray mr-1"
        />
        <p cy-validation="address-contact-name" className="text-sm">
          {addressInfo.contact.name}
        </p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <FaEnvelope
          cy-validation="address-icon-email"
          className="icon-md color-gray mr-1"
        />
        <p cy-validation="address-contact-email" className="text-sm">
          {addressInfo.contact.email}
        </p>
      </div>

      <div className="d-flex">
        <FaPhone
          cy-validation="address-icon-phone"
          className="icon-md color-gray mr-1"
        />
        <p cy-validation="address-contact-phone" className="text-sm mr-3">
          {addressInfo.contact.phone}
        </p>
        <FaFax
          cy-validation="address-icon-fax"
          className="icon-md color-gray mr-1"
        />
        <p cy-validation="address-contact-fax" className="text-sm mr-3">
          {addressInfo.contact.fax}
        </p>
      </div>
    </div>
  );
}

CardAddresses.defaultProps = {
  addressInfo: PropTypes.object,
};

CardAddresses.propTypes = {
  addressInfo: PropTypes.shape({
    address: PropTypes.string,
    code: PropTypes.string,
    contact: PropTypes.shape({
      email: PropTypes.string,
      fax: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
    label: PropTypes.string,
    name: PropTypes.string,
  }),
};
