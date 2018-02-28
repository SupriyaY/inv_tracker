import React, { Component } from 'react'
import { ContainerOne } from './StyledComponents/Containers'
import { Redirect } from 'react-router-dom'
import { SingleOwnerContainer } from './StyledComponents/Containers'
import styled from 'styled-components'


const CardButton = styled.button`
        height: 50px;
        width: 250px;
        color:#F7F9F9;
        background-color:#FFC857;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: 700;
        border-radius: 20px;
        border: 2px black solid;

        :hover {
            color:#FFC857;
            background-color:#2E4052;
            outline-style:none;
        }
`;
const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color .25s ease-in;
  &:focus {
    border-bottom-color: #4ee85e;
    outline: 0;
  }
`;
const CardWrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 300px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
`;
const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const Container = styled.form`
    display: flex;
    flex-direction: column;
`

class NewUser extends Component {

state = {
    redirect: false
}

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.newOwner()
        this.setState({ redirect: true })



    }



render () {

return (
this.state.redirect ? <Redirect to ="/business_owners"/> :

<SingleOwnerContainer>
            <div>
                <CardWrapper>
                    <Container onSubmit={this.handleSubmit} >
                        <CardBody>
                            <div>

                                <CardInput
                                    name="name" placeholder="Name" type="text" onChange={this.props.handleChange} />
                                <CardInput name="business_name" placeholder="Business Name" type="text" onChange={this.props.handleChange} />
                                <CardInput name="business_description" placeholder="Business Description" type="text" onChange={this.props.handleChange} />
                                <CardInput name="business_address" placeholder="Business Address" type="text" onChange={this.props.handleChange} />
                                <CardInput name="business_email" placeholder="Business Email" type="text" onChange={this.props.handleChange} />
                                <CardInput name="business_phone" placeholder="Business Phone" type="text" onChange={this.props.handleChange} />
                            </div>
                            <CardButton type="submit" value="submit">Submit</CardButton>


                        </CardBody>
                    </Container>
                </CardWrapper>
            </div>
</SingleOwnerContainer>




)

}

}




export default NewUser


