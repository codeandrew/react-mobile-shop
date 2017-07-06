const React = require('react');

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <h3>{this.props.text}</h3>
      </footer>
    );
  }
}

module.exports = Footer;
