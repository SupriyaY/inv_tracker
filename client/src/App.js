import React, { Component } from 'react';
import Homepage from './components/Homepage'
import { Header, Footer } from './components/StyledComponents/HeaderFooter'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"



// import axios from 'axios'



class App extends Component {
  state = {}

  render() {

// const homepageComponent = () => {
// return
// (<Homepage /> )
// }

    return (
      <div>
      <Header>
        </Header>
        <Router>
          <div>
      <Switch>
<Homepage/>
<Route exact path="/users" /> 
</Switch>      
</div>
 </Router>

      <Footer>
</Footer>
</div>
    );
  }
}

export default App;
