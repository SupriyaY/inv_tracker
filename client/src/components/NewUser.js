import React, { Component } from 'react'
import { ContainerOne } from './StyledComponents/Containers'
import { Redirect } from 'react-router-dom'
import { SingleOwnerContainer } from './StyledComponents/Containers'
import styled from 'styled-components'


const New = styled.div`
text-align: center;

`


const UserCard = styled.div`
top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 45vh;
    height: 70vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
    box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.5);
    border-radius: 5px;

`;


const CardButton = styled.button`
        color:#F7F9F9;
        background-color:#FFC857;
        font-size: 1em;
      margin: 1em;
       padding: 0.25em 1em;
        border-radius:3px;
        display: flex;
        align-items: center;
        justify-content:center;
        border-radius: 5;
        border: 2px black solid;
        :hover {
            color:#FFC857;
            background-color:#2E4052;
            outline-style:none;
        }
`;

const UserAdd = styled.div`
margin: 0 auto;     
display: flex;     
justify-content: flex-end;
flex-direction: column;
align-items: center;    
text-align: right;
padding: 20px;
color: black;
font-size: 3vh;
 
input {
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  margin-bottom: 10px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color .25s ease-in;
overflow: hidden;
             } 

`;




class NewUser extends Component {

    state = {
        redirect: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.newOwner()
        this.setState({ redirect: true })

    }


    render() {

        return (
            this.state.redirect ? <Redirect to="/business_owners" /> :

                <SingleOwnerContainer>
                    
                        <UserCard>
                            <UserAdd>
                            <form onSubmit={this.handleSubmit} >
                                    <div>
                                        <New>
                                    <h1>New Owner</h1>
                                    </New>
                                        <input
                                            name="name" placeholder="Name" type="text" onChange={this.props.handleChange} />
                                        <input name="business_name" placeholder="Business Name" type="text" onChange={this.props.handleChange} />
                                        <input name="business_description" placeholder="Business Description" type="text" onChange={this.props.handleChange} />
                                        <input name="business_address" placeholder="Business Address" type="text" onChange={this.props.handleChange} />
                                        <input name="business_email" placeholder="Business Email" type="text" onChange={this.props.handleChange} />
                                        <input name="business_phone" placeholder="Business Phone" type="text" onChange={this.props.handleChange} />
                                    </div>
                                    <CardButton type="submit" value="submit">Submit</CardButton>

</form>
</UserAdd>
                        </UserCard>
                </SingleOwnerContainer>




        )

    }

}




export default NewUser


