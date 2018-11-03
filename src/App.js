import React, { Component } from 'react';
import './content/App.css';
import AgAutocomplete from 'react-algoliasearch';
import Navbar from './components/navbar';
import Header from './components/header';
import StockFindAR from './components/stockFindAR';
import UseCases from './components/useCases';
import Resources from './components/resources';
import About from './components/about';

class App extends Component {
  // Constructor to set initial states
  constructor(props){
    super(props);
    this.state = {
      view: "home",
      loggedOn: false,
    }
  };

  // Change tabs onClick from Navbar
  changeTab = (tabName) => {
    this.setState({view: [tabName]});
  }

  // Render the JSX
  render() {
    return (
      <div className="App">
        <Navbar
          changeHome={() => this.changeTab("home")}
          changeStockFindAR={() => this.changeTab("stockFindAR")}
          changeUseCases={() => this.changeTab("useCases")}
          changeResources={() => this.changeTab("resources")}
          changeAbout={() => this.changeTab("about")}
          loggedOn={this.state.loggedOn}
        />
        <header className="App-header">

        </header>

        <body className="App-body">
          {(this.state.view == "home") && <Header />}
          {(this.state.view == "stockFindAR") && <StockFindAR />}
          {(this.state.view == "useCases") && <UseCases />}
          {(this.state.view == "resources") && <Resources />}
          {(this.state.view == "about") && <About />}
        </body>

        <footer>

        </footer>
      </div>
    );
  }
}

export default App;