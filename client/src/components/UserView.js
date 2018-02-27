import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import { SingleOwnerContainer } from './StyledComponents/Containers'
import axios from 'axios'

const UserCard = styled.div`
            height: 40vh;
            width: 30vw;
            background-color:#F7F9F9;
            display:flex;
            flex-direction: column;
            /* justify-content: space-around; */
            align-items: right;

            p {
                text-align: left;
                width: 50%;
                margin: 0;
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
class UserView extends Component {

    state = {
        business_owner: {},
        redirect: false
    }
    
    async componentWillMount() {
      await  this.getBOInfo()
    }

    getBOInfo = async() => {
        try{
const business_ownerId = this.props.match.params.id
const res = await axios.get(`/api/business_owners/${business_ownerId}`)
console.log(res.data)
this.setState({business_owner: res.data})

        }catch(err){
            console.log(err)


    }
}


render() {




return(

<SingleOwnerContainer>
        <UserCard>
            <h2>{this.state.business_owner.name}</h2>
            <p>{this.state.business_owner.business_name}</p>
            <p>{this.state.business_owner.business_description}</p>
            <p>{this.state.business_owner.business_email}</p>
            <p>{this.state.business_owner.business_phone}</p>

        </UserCard>
        
         
        
        <Link to="/business_owners/:id/inventories/:id">Inventory</Link> 
</SingleOwnerContainer>


)

}

}


export default UserView