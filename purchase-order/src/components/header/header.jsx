import React from 'react';
import './header.scss';


import Teste from '../../img/logo-me.jpg';



export default function Header(){


    return (
        <div className="row">
            <div className="col-sm-2">
                <div className="cnt-order-number">
                    <h1>Purchase Order</h1>
                    <p className="order-number">4510001114</p>
                    <p className="serial-number">SerialME 11223344</p>
                    <div className="cnt-me-logo">
                        <img src={Teste} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="cnt-client-info">
                    <h1>MTP West Buyer</h1>
                    
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="group-name">
                                <span className="material-icons md-20">groups</span>
                                <p>jacksonville Group (Jason Burn)</p>
                            </div>
                            <div className="icon-info">
                                <a href="###"><span className="material-icons md-20" title="Info">info_outline</span></a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="group-mail">
                                <span class="material-icons md-20">mail_outline</span>
                                <p>jacksonvillegroup@me.com</p>
                            </div>
                            <div className="group-phone">
                                <span class="material-icons md-20">local_phone</span>
                                <p>903-575-3050</p>
                            </div>
                            <div className="group-fax">
                                <span class="material-icons md-20">perm_phone_msg</span>
                                <p>999-575-3050</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="col-sm-2">
                
                <div className="cnt-status">
                    <h1 className="purchase-value">USD 20,000.00</h1>
                    <h2 className="status">Need to Confirm</h2>
                    <p>
                        Created on 04/16/2020
                    </p>
                </div>

            </div>
        </div>
    )
}