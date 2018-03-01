import React, { Component } from 'react'
import Homepage from './components/Homepage'
import { HomeHeader, Footer } from './components/StyledComponents/HeaderFooter'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import UsersShow from './components/UsersShow'
import UserView from './components/UserView'
import NewUser from './components/NewUser'
import Inventory from './components/Inventory'
import Supplier from './components/Supplier'
import Logo from './components/StyledComponents/img/logo.png'
import styled from 'styled-components'


import axios from 'axios'

//uid1600-40646540-19




class App extends Component {
  state = {
    business_owners: [],
    newOwner: {}

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


  addNewOwner = (newOwner) => {
    const business_owners = [...this.state.business_owners]
    business_owners.push(newOwner)
    this.componentWillMount()
    this.setState({ business_owners: business_owners })


  }

handleChange = (event) => {
const attribute = event.target.name
const val = event.target.value
const newOwner = {...this.state.newOwner }
newOwner[attribute] = val


this.setState({newOwner})

}


  newOwnerPost = () => {

    axios
      .post("/api/business_owners", this.state.newOwner)
      .then((response) => {
        const updateNewOwner = this.state.newOwner


        updateNewOwner._id = response.data._id
        this.addNewOwner(updateNewOwner)

      }).catch((error) => {
        console.log(error)
      })

  }

 
      // const resSupplier = await axois.get('/api/suppliers')
      render() {

        const userShowComponent = (props) => (<UsersShow owner={this.state.business_owners} />)

        const userViewComponent = (props) => (<UserView owner={this.state.business_owners} getOwners={this.getOwners} {...props} />)
        const newUserComponent = (props) => {
          return (
            <NewUser  {...props} handleChange={this.handleChange} newOwner={this.newOwnerPost} />
          )
        }

        return (
          <div>
            <HomeHeader>
           <a href="/"><img src={Logo} alt="Link"/></a>
            </HomeHeader>
            <Router>
              <div>
                <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/business_owners" component={userShowComponent} />
                  <Route exact path="/business_owners/new" render={newUserComponent} />
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
