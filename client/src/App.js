import React, { Component } from 'react';
import Homepage from './components/Homepage'
// import { Header, Footer } from './components/StyledComponents/HeaderFooter'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import UsersShow from './components/UsersShow'
import UserView from './components/UserView'


// import axios from 'axios'



class App extends Component {
  state = {
    users: [{}]
  }

  render() {



    return (
      <div>
      {/* <Header>
      </Header> */}
        <Router>
          <div>
      <Switch>

<Route exact path="/" component={Homepage}/>
<Route exact path="/users" component={UsersShow} /> 
<Route exact path="/users/:id" component={UserView} />

</Switch>      
</div>
 </Router>

      {/* <Footer>
</Footer> */}
</div>
    );
  }
}

export default App;
