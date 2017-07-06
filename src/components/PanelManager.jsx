const React = require('react');
const PanelHeader = require('./PanelHeader.jsx');
const PanelBody = require('./PanelBody.jsx');
const PanelPrice = require('./PanelPrice.jsx');


class PanelManager extends React.Component {
  createHeader(productName){
    return(
      <PanelHeader productName={productName} />
    );
  }
  createBody(manufacturer, releaseDate){
    return (
      <PanelBody manufacturer={manufacturer} releaseDate={releaseDate} />
    );
  }
  createPrice(price){
    return(
      <PanelPrice price={price} />
    );
  }
  render(){
    return(
      <div className="panel panel-default">
        {this.createHeader(this.props.header)}
        <div className="panel-body">
          {this.createBody(this.props.manufacturer, this.props.releaseDate)}
          {this.createPrice(this.props.price)}
        </div>
      </div>
     );
  }
}


module.exports = PanelManager;
