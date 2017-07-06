const React = require('react');
const PanelManager = require('./PanelManager.jsx');
const items = require('./items.jsx');

const itemsArr = Object.keys(items);
let phones = [], laptops = [], accesories = [];

class Filter extends React.Component {
  filterFunc(arr, str){
    let o = 0;
    for(var item of itemsArr){
       if (items[item]['categoryId'] == str ) {
         arr[o] = new Object();
         arr[o].pn = items[item]['productName']
         arr[o].manu =items[item]['manufacturer']
         arr[o].rel = items[item]['releaseDate']
         arr[o].pri = items[item]['price']
         o++;
       }
      }
  }
  getPhones(arr){
    const str = "c001";
    this.filterFunc(arr, str)
  }
  getLaptop(arr){
    const str = "c002";
    this.filterFunc(arr, str)
  }
  getAcc(arr){
    const str = "c003";
    this.filterFunc(arr, str)
  }

  render(){
    const getPanel =function(item){
              return (
                <div className="col-sm-6">
                <PanelManager
                  header={item.pn}
                  manufacturer={item.manu}
                  releaseDate={item.rel}
                  price={item.pri}
                  key = {item.pn + item.manu}
                />
              </div>
              );
            };
    this.getPhones(phones);
    this.getLaptop(laptops);
    this.getAcc(accesories);
    const phoneList = phones.map(getPanel)
    const laptopList = laptops.map(getPanel)
    const accList = accesories.map(getPanel)



    return(
      <div className="container">
        <div className="row">
          <h2>Phones</h2>
          {phoneList}
        </div>
        <div className="row">
          <h2>Laptops</h2>
          {laptopList}
        </div>
        <div className="row">
          <h2>Accesories</h2>
          {accList}
        </div>
      </div>
    );
  }
}


module.exports = Filter;
