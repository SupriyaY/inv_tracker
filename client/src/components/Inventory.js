import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
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

class Inventory extends Component {
    state = {
        inventory: {},
        redirect: false
    }
    async componentWillMount() {
        await this.getItems()
    }

    getItems = async () => {
        try {
            const inventoryId = this.props.match.params.id
            const res = await axios.get(`/api/inventories/${inventoryId}`)
            console.log(res.data)
            this.setState({ inventory: res.data })

        } catch (err) {
            console.log(err)


        }
    }

render (){

return (

<SingleOwnerContainer>    
    <UserCard>
        <h2>{this.state.inventory.category}</h2>
    </UserCard>
    <Link to="business_owners/:id/inventories/:id/suppliers/:id">Supplier</Link>
</SingleOwnerContainer>

)


}

}




















export default Inventory;