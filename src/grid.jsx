const React = require('react');
const PanelManager = require('./components/PanelManager.jsx');
const Header = require('./components/common/header.jsx');
const Footer = require('./components/common/footer.jsx');
const Filter = require('./components/Filter.jsx');

class Grid extends React.Component{
  render(){
    return (
      <div>
        <Header text='Betica Shop' />
        <div className="app-body">
          <Filter />
        </div>
        <Footer text='Copyright 2017' />
      </div>

    );
  }
}

module.exports = Grid;
