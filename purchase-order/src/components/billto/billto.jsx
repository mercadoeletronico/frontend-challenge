import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './billto.scss';

export default function Billto() {

    const [billcnt, setBillcnt] = useState(false);
    const [billcontact, setBillcontact] = useState(false);

    useEffect(
        function () {
            load();
        }, []
    )

    async function load(){
        try{
            const billdata = await axios.get("https://me-frontend-challenge-api.herokuapp.com/orders/1");
            setBillcnt(billdata.data.addresses[1]);
            setBillcontact(billdata.data.addresses[1].contact);
            //console.log(billdata.data.addresses[1]);
        } catch(erro){
            console.log(erro);
        }
        
    }

    return (
        <Fragment>
            <div className="cnt-billto">
                <h1>{billcnt.label}</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>{billcnt.name}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cnt-ico"><span className="material-icons md-20">where_to_vote</span></div>
                        <div className="billto-address"><p data-cy="client-address">{billcnt.address}</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cnt-ico"><span className="material-icons md-20">person_outline</span></div>
                        <div className="billto-contact-name"><p data-cy="client-contact-name">{billcontact.name}</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cnt-ico"><span className="material-icons md-20">mail_outline</span></div>
                        <div className="billto-contact-mail"><p data-cy="client-contact-mail">{billcontact.email}</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="billto-contact-phone">
                            <span className="material-icons md-20">phone_enabled</span>
                            <p data-cy="client-contact-phone">{billcontact.phone}&nbsp;&nbsp; </p>
                            <span className="material-icons md-20">perm_phone_msg</span>
                            <p data-cy="client-contact-fax">{billcontact.fax}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}