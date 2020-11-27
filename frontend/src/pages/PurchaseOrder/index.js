import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Supplier from "../../components/Supplier";
import Accordion from "../../components/Accordion";
import CardAddresses from "../../components/CardAddresses";
import api from "../../services/api";

export default function PurchaseOrder() {
  const [addresses, setAddresses] = useState();
  const [header, setHeader] = useState();
  const [supplier, setSupplier] = useState();

  async function fetchData() {
    const response = await api.get("/orders/1");
    return (
      setAddresses(response.data.addresses),
      setHeader(response.data.header),
      setSupplier(response.data.supplier)
    );
  }

  useEffect(() => fetchData(), []);

  return (
    <>
      {header && <Header headerInfo={header} />}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-5">
            {supplier && <Supplier supplierInfo={supplier} />}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {addresses && (
              <Accordion title="Addresses">
                {addresses.map((address, index) => (
                  <div key={addresses[index]} className="col-12 col-md-4">
                    <CardAddresses addressInfo={address} />
                  </div>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
