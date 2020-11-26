import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { FaUser, FaEye, FaPhone, FaFax, FaReply } from "react-icons/fa";

export default function Supplier({ supplierInfo }) {
  return (
    <div className="e-box --transition-off">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 mb-3 mb-md-2 mb-2">
          <p className="color-gray text-sm mb-2">Supplier</p>
          <p className="color-primary fw-600 text-md">
            {supplierInfo.name}
            <span className="ml-2 e-badge">{`Code #${supplierInfo.code}`}</span>
          </p>
        </div>
      </div>

      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-sm-6 col-md-4 mb-md-2 mb-2">
          <p className="text-sm">{supplierInfo.document.value}</p>
        </div>

        <div className="col-12 col-sm-6 col-md mb-md-3 mb-3">
          <p className="d-flex align-items-centertext-sm mr-xl-2 ">
            <FaUser className="icon-md color-gray mr-1" />
            {`${supplierInfo.contact.name}`} -{" "}
            <span className="color-primary">{supplierInfo.contact.email}</span>
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 mb-md-3 mb-3">
          <div className="dflex align-items-end">
            <p className="d-flex align-items-center text-sm">
              <FaEye className="icon-md color-gray mr-1" />
              {`Read: ${moment(supplierInfo.readAt).format(
                "MM/DD/YYYY hh:mm"
              )}`}
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <p className="text-sm text-inline-ellipsis">{supplierInfo.address}</p>
        </div>
        <div className="col-12 col-sm-6 col-md mb-3">
          <div className="d-flex">
            <p className="d-flex align-items-center text-sm mr-xl-2">
              <FaPhone className="icon-md color-gray mr-1" />
              {`${supplierInfo.contact.phone}`}
            </p>
            <p className="d-flex align-items-center text-sm mr-xl-2">
              <FaFax className="icon-md color-gray mr-1" />
              {`${supplierInfo.contact.fax}`}
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="dflex align-items-end">
            <p className="d-flex align-items-center text-sm">
              <FaReply className="icon-md color-gray mr-1" />
              {`Last Reply: ${moment(supplierInfo.lastReplyAt).format(
                "MM/DD/YYYY hh:mm"
              )}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Supplier.defaultProps = {
  supplierInfo: PropTypes.object,
};

Supplier.propTypes = {
  supplierInfo: PropTypes.shape({
    address: PropTypes.string,
    code: PropTypes.string,
    contact: PropTypes.shape({
      email: PropTypes.string,
      fax: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
    document: PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.string,
    }),

    lastReplyAt: PropTypes.string,
    name: PropTypes.string,
    readAt: PropTypes.string,
  }),
};
