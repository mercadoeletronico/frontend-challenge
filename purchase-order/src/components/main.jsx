import React, { Fragment } from 'react';
import './main.scss';

import Head from './header/header';
import Supplier from './supplier/supplier';
import Shipto from './shipto/shipto';
import Billto from './billto/billto';
import Chargeto from './chargeto/chargeto';

export default function Main() {

    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">

                    <div className="row">
                        <div className="col-sm-12">
                            <Head />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Supplier />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-icon">
                            <span className="material-icons md-20">keyboard_arrow_down</span>
                            </div>
                            <h1>Addresses</h1>
                        </div>
                        <div className="col-sm-4">
                            <Shipto />
                        </div>
                        <div className="col-sm-4">
                            <Billto />
                        </div>
                        <div className="col-sm-4">
                            <Chargeto />
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}