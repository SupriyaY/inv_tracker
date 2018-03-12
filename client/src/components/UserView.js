import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import { SingleOwnerContainer } from './StyledComponents/Containers'
import EditUser from './EditUser'
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

const Button = styled.button`
background-color: white;
color: #4CA1AF;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border:2px solid #4CA1AF;
border-radius: 3px;
    &:hover {
    opacity: 0.8;
    position: relative;
    bottom: -5px;
    }
 `;







class UserView extends Component {

    state = {
        business_owner: {
            inventories: [],
            suppliers: []
        },
        updateOwner: {},
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

    handleChange = (event) => {
        const updateOwner = {
            ...this.state.business_owner
        }
        updateOwner[event.target.name] = event.target.value
        this.setState({ user: updateOwner })
    }

    editOwner = async () => {
        try {
            const response = await axios.patch(`/api/business_owners/${this.state.business_owner.id}`, this.state.business_owner)

            this.setState({ updatedOwner: response.data, redirectToEdit: false })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const updateOwner = {
            ...this.state.business_owner
        }
        updateOwner[event.target.name] = event.target.value
        this.setState({ user: updateOwner })
    }

    handleEdit = (event) => {
        event.preventDefault()
        this.editOwner()
        this.setState({ redirectToEdit: false })
    }

    setStateToEdit = () => {
        this.setState({ redirectToEdit: true })
    }




render() {




return(
    this.state.redirect ? <Redirect to={'/business_owners'} /> :
        this.state.redirectToEdit ? <EditUser owner={this.state.business_owner} handleEdit={this.handleEdit} handleChange={this.handleChange} /> :
<SingleOwnerContainer>
        <UserCard>
            <h2>{this.state.business_owner.name}</h2>
            <p><strong>Business: </strong> {this.state.business_owner.business_name}</p>
            <p><strong>Description: </strong> {this.state.business_owner.business_description}</p>
            <p><strong>Email: </strong> {this.state.business_owner.business_email}</p>
            <p><strong> Phone: </strong> {this.state.business_owner.business_phone}</p>

            <Button onClick={this.setStateToEdit}>Edit</Button>
            {/* <DeleteButton onClick={this.deleteConfirm}>Delete</DeleteButton> */}
        </UserCard>

        <UserCard>
            {this.state.business_owner.inventories.map((inventory, index) => {  
            
                return (
                    <div>
                        <h2>Inventory</h2>                 
                        <div><strong>Category: </strong>{inventory.category}</div>
                        <div><strong>Name: </strong>{inventory.name}</div>
                        <div><strong>Description: </strong>{inventory.description}</div>
</div>
                   
                )

            
        
        })
    }

        </UserCard>
        <UserCard>
            {this.state.business_owner.suppliers.map((supplier, index) => {

                return (
                    <div>
                        <h2>{supplier.name}</h2>
                        <div><strong>Address: </strong>{supplier.address}</div>
                        <div><strong>POC: </strong>{supplier.contact_name}</div>
                        <div><strong>Email: </strong>{supplier.contact_email}</div>
                        <div><strong>Phone: </strong>{supplier.contact_phone}</div>
                    </div>

                )



            })
            }

        </UserCard>
        

</SingleOwnerContainer>


)

}

}


export default UserView