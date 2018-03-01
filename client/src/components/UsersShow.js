import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import {BusinessOwnersContainer} from './StyledComponents/Containers'


const UserCard = styled.div`
            height: 45vh;
            width: 35vh;
            background-color:#F7F9F9;
            display:flex;
            flex-direction: column;
            /* justify-content: space-around; */
            align-items: center;
            /* margin-top: 5px; */
            margin: 10px;

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
    console.log(this.props)
    const businessOwner = this.props.owner.map((owner, index) => {
        return (<Link key={owner.id} to={`/business_owners/${owner.id}`}>
            <UserCard>
            
                
                <h2>{owner.name}</h2>
                <p>{owner.business_name}</p>
            </UserCard>
        </Link>)
    })
    console.log(this.props.owner)
        return (


            <BusinessOwnersContainer>
                {businessOwner}
<Link to="/business_owners/new">Sign up</Link>
                </BusinessOwnersContainer>
        )

    }


}



export default UsersShow