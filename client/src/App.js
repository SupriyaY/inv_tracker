import React, { Component } from 'react';
import Homepage from './components/Homepage'
import { Header, Footer } from './components/StyledComponents/HeaderFooter'



// import axios from 'axios'

class App extends Component {
  render() {
    return (
      <div>
      <Header>
        </Header>
      <div>
      <Homepage/>
      </div>
      <Footer>
</Footer>
      </div>
    );
  }
}

export default App;
