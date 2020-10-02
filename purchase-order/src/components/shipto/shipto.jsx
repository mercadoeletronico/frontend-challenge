import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './shipto.scss';

export default function Shipto() {

    const [shipcnt, setShipcnt] = useState(false);
    const [shipcontact, setShipcontact] = useState(false);

    useEffect(
        function () {
            load();
        }, []
    )

    async function load(){
        try{
            const shipdata = await axios.get("https://me-frontend-challenge-api.herokuapp.com/orders/1");
            setShipcnt(shipdata.data.addresses[0]);
            setShipcontact(shipdata.data.addresses[0].contact)
            //console.log(shipdata.data.addresses[0]);
        } catch(erro){
            console.log(erro);
        }
        
    }

    return (
        <Fragment>
            <div className="cnt-shipto">
                <h1>{shipcnt.label}</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>{shipcnt.name} - <span>({shipcnt.code})</span></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cnt-ico"><span className="material-icons md-20">where_to_vote</span></div>
                        <div className="shipto-address"><p>{shipcnt.address}</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cnt-ico"><span className="material-icons md-20">person_outline</span></div>
                        <div className="shipto-contact-name"><p>{shipcontact.name}</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cnt-ico"><span className="material-icons md-20">mail_outline</span></div>
                        <div className="shipto-contact-mail"><p>{shipcontact.email}</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="shipto-contact-phone">
                            <span className="material-icons md-20">phone_enabled</span>
                            <p>{shipcontact.phone}&nbsp;&nbsp; </p>
                            <span className="material-icons md-20">perm_phone_msg</span>
                            <p>{shipcontact.fax}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
