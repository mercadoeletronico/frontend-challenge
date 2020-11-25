import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PurchaseOrder from '../pages/PurchaseOrder';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={PurchaseOrder} />
    </Switch>
  );
}
