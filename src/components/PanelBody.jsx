const React = require('react');

class PanelBody extends React.Component {
  render (){
    return (
      <div>
        Manufuctured by {this.props.manufacturer},
        to be released in {this.props.releaseDate}
      </div>
    );
  }
}

module.exports = PanelBody ;
