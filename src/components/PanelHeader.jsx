const React = require('react')

class PanelHeader extends React.Component {
  render(){
    return (
        <div className="panel-heading">
          {this.props.productName}
        </div>
    );
  }
}

module.exports = PanelHeader;
