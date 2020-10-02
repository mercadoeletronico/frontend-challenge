import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import './supplier.scss';

export default function Supplier() {

    const [suppliercnt, setSuppliercnt] = useState(false);
    const [supplierdoc, setSupplierdoc] = useState(false);
    const [suppliercontact, setSuppliercontact] = useState(false);

    useEffect(
        function () {
            load();
        }, []
    )

    async function load(){
        try{
            const supplierdata = await axios.get("https://me-frontend-challenge-api.herokuapp.com/orders/1");
            setSuppliercnt(supplierdata.data.supplier);
            setSupplierdoc(supplierdata.data.supplier.document);
            setSuppliercontact(supplierdata.data.supplier.contact);
            //console.log(supplierdata.data.supplier);
        } catch(erro){
            console.log(erro);
        }
        
    }

    return (
        <Fragment>
            <div className="cnt-supplier">
                <h1>Supplier</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <span className="supplier-name">{suppliercnt.name}</span>
                        <span className="supplier-code">Code #{suppliercnt.code}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="supplier-numder"><p>{supplierdoc.value}</p></div>
                    </div>
                    <div className="col-sm-4">
                        <div className="supplier-contact">
                            <span className="material-icons md-20">person_outline</span>
                            <p>{suppliercontact.name} -  <a href={"mailto:" + suppliercontact.email}>{suppliercontact.email}</a></p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="supplier-view">
                            <span className="material-icons md-20">visibility</span>
                            <p>Read: </p>
                            <p><NumberFormat format="####/##/## - ##:##" displayType={'text'} mask={['Y', 'Y', 'Y', 'Y', 'M', 'M', 'D', 'D', 'H', 'H', 'M', 'M']} value={suppliercnt.readAt}/></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="supplier-address"><p>{suppliercnt.address}</p></div>
                    </div>
                    <div className="col-sm-4">
                        <div className="supplier-phone">
                            <span className="material-icons md-20">phone_enabled</span>
                            <p>{suppliercontact.phone}&nbsp; - &nbsp;</p>
                            <span className="material-icons md-20">perm_phone_msg</span>
                            <p>{suppliercontact.fax}</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="supplier-replay">
                            <span className="material-icons md-20">reply</span>
                            <p>Last Reply:</p>
                            <p><NumberFormat format="####/##/## - ##:##" displayType={'text'} mask={['Y', 'Y', 'Y', 'Y', 'M', 'M', 'D', 'D', 'H', 'H', 'M', 'M']} value={suppliercnt.lastReplyAt}/></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}