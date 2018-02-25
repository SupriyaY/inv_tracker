import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import {BusinessOwnersContainer} from './StyledComponents/Containers'

class UsersShow extends Component {


    render() {

        return (


            <BusinessOwnersContainer>
                Hello form the usershow page!

                 <Link to="users/:userid">UserView</Link> 

                </BusinessOwnersContainer>
        )

    }
}





export default UsersShow