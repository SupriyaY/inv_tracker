import React, { Component } from 'react';
import Homepage from './components/Homepage'
import { Header, Footer } from './components/StyledComponents/HeaderFooter'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import UsersShow from './components/UsersShow'
import UserView from './components/UserView'
import NewUser from './components/NewUser'
import Inventory from './components/Inventory'
import Supplier from './components/Supplier'





class App extends Component {
  state = {
    users: [{}]
  }


//Axios Calls //is this correct?

// async componentWillMount () {
// const resOwners = await axios.get('/api/business_owners')
// const resInv = await axios.get('/api/inventories')
// const resSupplier = await axois.get('/api/suppliers')

// }



  render() {



    return (
      <div>
      <Header>
      </Header> 
        <Router>
          <div>
      <Switch>

<Route exact path="/" component={Homepage}/>
<Route exact path="/users" component={UsersShow} /> 
 <Route exact path="/users/new" component={NewUser} />
<Route exact path="/users/:id" component={UserView} />
<Route exact path="/users/:id/inventories/:id" component={Inventory} />
<Route exact path="/inventories/:id/suppliers" component={Supplier} />
</Switch>      
</div>
 </Router>

  
 <Footer/> 
 </div>
    );
  }
}

export default App;
