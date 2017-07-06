const React = require('react');

class PanelPrice extends React.Component {
  render (){
    return (
      <span className="label label-default">
        {this.props.price}
      </span>
    );
  }
}

module.exports = PanelPrice;
