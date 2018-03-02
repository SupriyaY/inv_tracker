import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import { SingleOwnerContainer } from './StyledComponents/Containers'
import axios from 'axios'

const UserCard = styled.div`
            height: 30vh;
            width: 45vh;
            background-color: #E8D8B4;
            display:flex;
            flex-direction: column;
            align-items: right;
            margin: 10px;
            p {
                text-align: left;
                width: 100%;
                margin: 0;
            }

            h3 {
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
        business_owner: {
            inventories: [],
            suppliers: []
        },
        redirect: false
    }
    
    async componentWillMount() {
       this.getBOInfo()
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
            <h3>{this.state.business_owner.name}</h3>
            <p>{this.state.business_owner.business_name}</p>
            <p>{this.state.business_owner.business_description}</p>
            <p>{this.state.business_owner.business_email}</p>
            <p>{this.state.business_owner.business_phone}</p>
        </UserCard>


        <UserCard>
            {this.state.business_owner.inventories.map((inventory, index) => {  
            
                return (
                    <div>
                        
<div>{inventory.category}</div>
<div>{inventory.name}</div>
<div>{inventory.description}</div>
</div>
                   
                )

            
        
        })
    }

        </UserCard>
        <UserCard>
            {this.state.business_owner.suppliers.map((supplier, index) => {

                return (
                    <div>

                        <div>{supplier.name}</div>
                        <div>{supplier.address}</div>
                        <div>{supplier.contact_name}</div>
                        <div>{supplier.contact_email}</div>
                        <div>{supplier.contact_phone}</div>
                    </div>

                )



            })
            }

        </UserCard>
        

   

         
{/*         
        <Link to={`/business_owners/${this.state.business_owner.id}/inventories/`}>Inventory</Link>  */}
</SingleOwnerContainer>


)

}

}


export default UserView