import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/me.svg";

export default function Purchase({ number, serial }) {
  return (
    <div className="e-purchase-header">
      <div className="d-flex flex-column ">
        <h1
          cy-validation="header-purchase-order"
          className="text-xl fw-600 color-white mb-2"
        >
          Purchase Order
        </h1>
        <p
          cy-validation="header-purchase-number"
          className="text-xxl fw-600 color-white mb-2"
        >
          {number}
        </p>
        <p cy-validation="header-serial-number" className="fw-700">
          <i>{`SerialME ${serial}`}</i>
        </p>
      </div>
      <div className="__me-logo">
        <img cy-validation="header-logo-me" src={logo} alt="" />
      </div>
    </div>
  );
}

Purchase.defaultProps = {
  number: PropTypes.number,
  serial: PropTypes.number,
};
Purchase.propTypes = {
  number: PropTypes.number,
  serial: PropTypes.number,
};
