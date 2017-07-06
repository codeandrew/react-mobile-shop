const React = require('react');

class Header extends React.Component {
  render(){
    return(
      <header>
        <div className="nav-brand">
          <h1> {this.props.text} </h1>
        </div>
      </header>
    );
  }
}

module.exports = Header;
