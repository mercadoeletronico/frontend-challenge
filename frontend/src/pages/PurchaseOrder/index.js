import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Supplier from "../../components/Supplier";
// import Card from '../../components/Card';
import api from "../../services/api";

export default function PurchaseOrder() {
  // const [addresses, setAddresses] = useState([]);
  const [header, setHeader] = useState();
  const [supplier, setSupplier] = useState();

  async function fetchData() {
    const response = await api.get("/orders/1");
    return (
      // setAddresses(response.data.addresses),
      setHeader(response.data.header), setSupplier(response.data.supplier)
    );
  }

  useEffect(() => fetchData(), []);

  return (
    <>
      {header && <Header headerInfo={header} />}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {supplier && <Supplier supplierInfo={supplier} />}
          </div>
        </div>
        {/* <div className='row'>
        <div className='col-12'>
          {addresses.map((address, index) => (
            <div key={addresses[index]} className='col-12 col-md-3 col-lg-3'>
              <Card addressInfo={address} />
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </>
  );
}
