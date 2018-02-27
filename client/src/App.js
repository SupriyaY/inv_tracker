import React, { Component } from 'react';
import Homepage from './components/Homepage'
import { Header, Footer } from './components/StyledComponents/HeaderFooter'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import UsersShow from './components/UsersShow'
import UserView from './components/UserView'
import NewUser from './components/NewUser'
import Inventory from './components/Inventory'
import Supplier from './components/Supplier'

import axios from 'axios'



class App extends Component {
  state = {
    business_owners: []
    // inventories: []
  }


  //Axios Calls //is this correct?

  async componentWillMount() {
    this.getOwners()
  }


  getOwners = async () => {
    const res = await axios.get('/api/business_owners')
    const resOwners = res.data
    try {
      console.log(resOwners)
      this.setState({ business_owners: resOwners })
    }
    catch (error) {
      console.log(error)
    }}

    getItems = async () => {
      const res = await axios.get('/api/inventories')
      const resItems = res.data
      try {
        console.log(resItems)
        this.setState({ inventories: resItems })
      }
      catch (error) {
        console.log(error)
      }}

      // const resSupplier = await axois.get('/api/suppliers')
      render() {

        const userShowComponent = (props) => (<UsersShow owner={this.state.business_owners} />)

        const userViewComponent = (props) => (<UserView owner={this.state.business_owners} getOwners={this.getOwners} {...props} />)

        const inventoryComponent = (props) => (<Inventory item={this.state.inventories} getItems={this.getItems} {...props}/>)

        return (
          <div>
            <Header>
            </Header>
            <Router>
              <div>
                <Switch>

                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/business_owners" component={userShowComponent} />
                  <Route exact path="/business_owners/new" component={NewUser} />
                  <Route exact path="/business_owners/:id" render={userViewComponent} />
                  <Route exact path="/business_owners/:id/inventories/:id" component={Inventory} />
                  <Route exact path="/business_owners/:id/inventories/:id/suppliers/:id" component={Supplier} />
                </Switch>
              </div>
            </Router>


            <Footer />
          </div>
        );
      }
    }

    export default App;
