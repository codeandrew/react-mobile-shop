const React = require('react');

class Panel extends React.Component {
  render () {
    <div className="panel panel-default">
      <div className="panel-heading">
        {this.props.manufacturer}
      </div>
      <div className="panel-body">
        Manufactured by {this.props.manufacturer},
        to be released in {this.props.releaseDate}

        <button> {this.props.price}</button>
      </div>
    </div>
  }
}


module.exports = Panel;
