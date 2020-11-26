import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

export default function Accordion({ title, children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="e-accordion mb-3">
      <div
        className={`e-accordion__title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div className="d-flex align-items-center">
          <div className="e-accordion__circle-wrapper color-primary mr-2">
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          <p className="text-lg fw-600">{title}</p>
        </div>
      </div>
      <div className={`e-accordion__item ${!isOpen ? "--collapsed" : ""}`}>
        <div className="row e-accordion__content">{children}</div>
      </div>
    </div>
  );
}
