import './App.css'
import { Component } from 'react';



class App extends Component {

  // state = {
  //   header: [],
  //   addresses: [],
  //   supplier: [],
  //   add: [],
  //   test: {}
  // };

  constructor() {
    super();
    this.state = {
      header: [],
      addresses: [],
      supplier: [],
      add: [],
      // test: {}
    }
  }

  componentDidMount() {
    fetch('https://me-frontend-challenge-api.herokuapp.com/orders/1')
      .then(res => res.json())
      .then(res => {
        //console.log(data.header.number)
        // console.log(res)
        this.setState({
          header: res.header,
          addresses: res.addresses,
          supplier: res.supplier,
          add: res.addresses.label,
          // test: res,
          // other: [
          //   { teste: 'asd'},
          //   {another: 'sdfh'},
          //   {another: 'sdfh'},
          // ]
        });
        console.log(res, 'res')
        // console.log(this.state.purchases, 'state')
        // console.log(this.state.purchases.header.buyer, 'state2')
      });

  }


  render() {

    if (!this.state.addresses[0]) {
      return (<span>Loading</span>)
    }

    return (
      <div>
        <div className="page">
          <div className="container">
            <div className="Header">
              <div className="purchases">
                <p className="purchase">Purchase Order</p>
                <p className="number">{this.state.header.number}</p>
                <p className="code">SerialME {this.state.header.serial}</p>
              </div>
              <div className="container-data">
                <div className="buyer">
                  <h1>{this.state.header.buyer}</h1>
                  <p className="buyer-name"> <i class="far fa-user"></i>{this.state.header.contact.name}
                  </p>
                  <p className="buyer-email">
                    <a href="jacksonvillegroup@me.com"> <i class="far fa-envelope"></i>{this.state.header.contact.email}</a>
                  </p>
                  <i className="buyer-phone"> <i class="fas fa-phone"></i>{this.state.header.contact.phone}</i>
                </div>
                <div className="order">
                  <h1>{this.state.header.currency} {this.state.header.price}</h1>
                  <p className="status">{this.state.header.status}</p>
                  <p className="create">16/04/2020</p>
                </div>
              </div>
            </div>
            <div className="supplier">
              <h3>Supplier</h3>
              <h1 className="supplier-data">
                <p className="supplier-name">
                  {this.state.supplier.name}
                </p>
                <span className="supplier-code">Code #{this.state.supplier.code}</span>
              </h1>
              <div className="supplier-inf">
                <div>
                  <p>{this.state.supplier.document.value}</p>
                  <p>{this.state.supplier.address}</p>
                </div>
                <div className="supplier-contact">
                  <i class="far fa-user"></i> <span>{this.state.supplier.contact.name} - {this.state.supplier.contact.email}</span>
                  <p><i class="fas fa-phone"></i>{this.state.supplier.contact.phone} - <i class="fas fa-fax"></i> {this.state.supplier.contact.fax} </p>
                </div>
                <div className="supplier-log">
                  <p><i class="far fa-eye"></i>Read: 23/05/2020 12:45</p>
                  <p><i class="fas fa-reply"></i>Last Reply: 23/05/2020 13:00</p>
                </div>
              </div>
            </div>
            <div className="container-address">
              <div>
                <h2>
                  <i class="fas fa-chevron-down"></i>
                  Addresses</h2>
              </div>
              <div className="content-address">
                <div>
                  <div className="address-ship">
                    <div className="address-shipname">
                      <h3>{this.state.addresses[0].label}</h3>
                      <h1>{this.state.addresses[0].name} - ({this.state.addresses[0].code})</h1>
                      <div className="nameaAddress">
                        <h4><i class="fas fa-map-marker-alt"></i>{this.state.addresses[0].address}</h4>
                        <h5><i class="far fa-user"></i>{this.state.addresses[0].contact.name}</h5>
                        <h5><i class="far fa-envelope"></i>{this.state.addresses[0].contact.email}</h5>
                        <h5><i class="fas fa-phone"></i>{this.state.addresses[0].contact.phone}
                          <i class="fas fa-fax"> {this.state.addresses[0].contact.fax} </i></h5>
                      </div>
                    </div>
                    <div className="address-bill">
                      <div className="address-billname">
                        <h3>{this.state.addresses[1].label}</h3>
                        <h1>{this.state.addresses[1].name} {this.state.addresses[1].code}</h1>
                        <div className="nameaAddress">
                          <h4><i class="fas fa-map-marker-alt"></i>{this.state.addresses[1].address}</h4>
                          <h5><i class="far fa-user"></i>{this.state.addresses[1].contact.name}</h5>
                          <h5><i class="far fa-envelope"></i>{this.state.addresses[1].contact.email}</h5>
                          <h5><i class="fas fa-phone"></i>{this.state.addresses[1].contact.phone}
                            <i class="fas fa-fax"> {this.state.addresses[1].contact.fax} </i></h5>
                        </div>
                      </div>
                    </div>
                    <div className="address-charge">
                      <div className="address-chargename">
                        <h3>{this.state.addresses[2].label}</h3>
                        <h1>{this.state.addresses[2].name} {this.state.addresses[2].code}</h1>
                        <div className="nameaAddress">
                          <h4><i class="fas fa-map-marker-alt"></i>{this.state.addresses[2].address}</h4>
                          <h5><i class="far fa-user"></i>{this.state.addresses[2].contact.name}</h5>
                          <h5><i class="far fa-envelope"></i>{this.state.addresses[2].contact.email}</h5>
                          <h5><i class="fas fa-phone"></i>{this.state.addresses[2].contact.phone}
                            <i class="fas fa-fax"> {this.state.addresses[2].contact.fax} </i></h5> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
