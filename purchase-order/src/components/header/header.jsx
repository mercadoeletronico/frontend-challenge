import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import './header.scss';
import './mobile.scss';
import Teste from '../../img/logo-me.jpg';

export default function Header(){

    const [cnttext, setCnttext] = useState(false);
    const [person, setPerson] = useState(false);

    useEffect(
        function () {
            load();
        }, []
    )

    async function load(){
        try{
            const headerdata = await axios.get("https://me-frontend-challenge-api.herokuapp.com/orders/1");
            setCnttext(headerdata.data.header);
            setPerson(headerdata.data.header.contact);
            //console.log(headerdata.data.header);
        } catch(erro){
            console.log(erro);
        }
        
    }

    return (
        <Fragment>
            <header data-cy="cnt-header">
                <div className="row">

                    <div className="col-sm-3 col-12">
                        <div className="cnt-order-number">
                            <h1>Purchase Order</h1>
                            <p className="order-number" data-cy="order-number">{cnttext.number}</p>
                            <p className="serial-number" data-cy="order-serial-number">SerialME {cnttext.serial}</p>
                            <div className="cnt-me-logo">
                                <img src={Teste} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="cnt-client-info">
                            <h1 data-cy="header-client-name">{cnttext.buyer}</h1>
                            
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="group-name">
                                        <span className="material-icons md-20">groups</span>
                                        <p data-cy="header-client-group">{person.name}</p>
                                    </div>
                                    <div className="icon-info">
                                        <a href="###"><span className="material-icons md-20" title="Info">info_outline</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="group-mail">
                                        <span className="material-icons md-20">mail_outline</span>
                                        <p data-cy="header-client-mail">{person.email}</p>
                                    </div>
                                    <div className="group-phone">
                                        <span className="material-icons md-20">phone_enabled</span>
                                        <p data-cy="header-client-phone">{person.phone}</p>
                                    </div>
                                    <div className="group-fax">
                                        <span className="material-icons md-20">perm_phone_msg</span>
                                        <p data-cy="header-client-fax">{person.fax}</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    <div className="col-sm-3 col-12">
                        
                        <div className="cnt-status">
                            <h1 className="purchase-value" data-cy="header-purchase-value">
                                USD&nbsp;
                                <NumberFormat value={cnttext.price} displayType={'text'} thousandSeparator={true} />
                            </h1>
                            <h2 className="status" data-cy="header-purchase-status">{cnttext.status}</h2>
                            <p data-cy="header-purchase-create">
                                Created on &nbsp;
                                <NumberFormat format="####/##/##" displayType={'text'} mask={['Y', 'Y', 'Y', 'Y', 'M', 'M', 'D', 'D']} value={cnttext.createdAt}/>
                            </p>
                        </div>

                    </div>
                </div>
            </header>
        </Fragment>
    )
}