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
                width: 50%;
            }

            h1, h2, h3 {
                margin: 0;
            }

            a {
                font-size: 1.0em;
                text-decoration: none;
                color:#FFC857;
                :hover{
                    color:#2E4052;
                }
            }


`




class UsersShow extends Component {


render () {
    const businessOwner = this.props.owner.map((owner, index) => {
        return (<Link to="/business_owners/:id">
            <UserCard key={owner.id} >
                <h2>{owner.name}</h2>
                <p>{owner.business_name}</p>
            </UserCard>
        </Link>)
    })
    console.log(this.props.owner)
        return (


            <BusinessOwnersContainer>
                {
                 businessOwner
                }
<br />
<Link to="/users/new">Sign up</Link>
                </BusinessOwnersContainer>
        )

    }


}



export default UsersShow