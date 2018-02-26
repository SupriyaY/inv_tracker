import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import {BusinessOwnersContainer} from './StyledComponents/Containers'


const UserCard = styled.div`
height: 40vh;
            width: 30vw;
            background-color:#F7F9F9;
            display:flex;
            flex-direction: column;
            /* justify-content: space-around; */
            align-items: right;

            p{
                text-align: center;
                width: 50%;
            }

            h1, h2, h3 {
                margin: 0;
            }

            a {
                font-size: 1.5em;
                text-decoration: none;
                color:#FFC857;
                :hover{
                    color:#2E4052;
                }
            }


`





class UsersShow extends Component {


    render() {

        return (


            <BusinessOwnersContainer>
                <Link to="/users/:id">
                <UserCard>
                    <h1>Name:</h1>
                    <h2>Business Name:</h2>
</UserCard>
                 </Link> 

<Link to="/users/new">Sign up</Link>
                </BusinessOwnersContainer>
        )

    }
}





export default UsersShow