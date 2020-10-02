import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './chargeto.scss';

export default function Chargeto() {

    const [chargecnt, setChargecnt] = useState(false);
    const [chargecontact, setChargecontact] = useState(false);

    useEffect(
        function () {
            load();
        }, []
    )

    async function load(){
        try{
            const chargedata = await axios.get("https://me-frontend-challenge-api.herokuapp.com/orders/1");
            setChargecnt(chargedata.data.addresses[2]);
            setChargecontact(chargedata.data.addresses[2].contact);
            console.log(chargedata.data.addresses[2]);
        } catch(erro){
            console.log(erro);
        }
        
    }

    return (
        <Fragment>
            <div className="cnt-chargeto">
                <h1>{chargecnt.label}</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>{chargecnt.name}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cnt-ico"><span className="material-icons md-20">where_to_vote</span></div>
                        <div className="chargeto-address"><p>{chargecnt.address}</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cnt-ico"><span className="material-icons md-20">person_outline</span></div>
                        <div className="chargeto-contact-name"><p>{chargecontact.name}</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cnt-ico"><span className="material-icons md-20">mail_outline</span></div>
                        <div className="chargeto-contact-mail"><p>{chargecontact.email}</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="chargeto-contact-phone">
                            <span className="material-icons md-20">phone_enabled</span>
                            <p>{chargecontact.phone}&nbsp;&nbsp; </p>
                            <span className="material-icons md-20">perm_phone_msg</span>
                            <p>{chargecontact.fax}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}