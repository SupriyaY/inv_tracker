import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import {BusinessOwnersContainer} from './StyledComponents/Containers'
import NewPlus from './StyledComponents/img/plus.png'

const UserCard = styled.div`
            min-height: 30vh;
            min-width: 40vh;
            background-color:#E8D8B4;
            display:flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;
            margin-top: 50px;
            p{
                width: 50%;
                text-align: center;
                color: black;
                margin-top: 1vh;
    
            }

            h1, h2, h3 {
                margin-right: 5px;
                text-decoration: none;
                color: black;
            
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
                <Link to="/business_owners/new"><img src={NewPlus} alt="Add"/></Link>
                </BusinessOwnersContainer>
        )

    }


}



export default UsersShow