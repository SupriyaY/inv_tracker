import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import { SingleOwnerContainer } from './StyledComponents/Containers'

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
class UserView extends Component {

    


render() {


return(
<SingleOwnerContainer>
    <UserCard>
Hello from the userview page
</UserCard>

        <Link to="/users/:id/inventories/:id">Inventory</Link> 
</SingleOwnerContainer>


)

}

}


export default UserView