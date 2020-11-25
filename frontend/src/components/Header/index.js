import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaFax,
  FaInfoCircle,
} from "react-icons/fa";
import Purchase from "../Purchase";

export default function Header({ headerInfo }) {
  return (
    <header className="header-format">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3 mb-3 mb-md-0">
          <Purchase number={headerInfo.number} serial={headerInfo.serial} />
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-6">
          <div className="d-flex flex-column align-items-sm-start align-items-center ml-3">
            <h1 className="text-xxxl fw-600 mb-2">{headerInfo.buyer}</h1>
            <div className="d-flex align-items-center mb-2">
              <p className="mr-xl-2">
                <FaUsers className="mr-1" />
                {headerInfo.contact.name}
              </p>
              <FaInfoCircle />
            </div>

            <div className="d-flex flex-column flex-xl-row">
              <p className="d-flex align-items-center mr-xl-4 mb-2">
                <FaEnvelope className="mr-1" />
                {headerInfo.contact.email}
              </p>
              <p className="d-flex align-items-center mr-xl-2 mb-2">
                <FaPhone className="mr-1" />
                {headerInfo.contact.phone}
              </p>
              <p className="d-flex align-items-center mr-xl-2 mb-2">
                <FaFax className="mr-1" />
                {headerInfo.contact.fax}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="d-flex flex-column align-items-sm-end align-items-center pr-0 pr-sm-3">
            <h1 className="text-xxxl fw-600 mb-2">{`USD ${headerInfo.price}`}</h1>
            <strong className="text-lg color-golden fw-600 mb-2">
              {headerInfo.status}
            </strong>
            <p>
              {`Created on ${moment(headerInfo.createdAt).format(
                "MM/DD/YYYY"
              )}`}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  headerInfo: PropTypes.object,
};

Header.propTypes = {
  headerInfo: PropTypes.shape({
    buyer: PropTypes.string,
    contact: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      fax: PropTypes.string,
    }),
    createdAt: PropTypes.string,
    currency: PropTypes.string,
    number: PropTypes.number,
    price: PropTypes.number,
    serial: PropTypes.number,
    status: PropTypes.string,
  }),
};
