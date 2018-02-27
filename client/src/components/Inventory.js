import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import { SingleOwnerContainer } from './StyledComponents/Containers'


class Inventory extends Component {

render (){

return (

<SingleOwnerContainer>    
    Hello from the inventory page!
    
    <Link to="business_owners/:id/inventories/:id/suppliers/:id">Supplier</Link>
</SingleOwnerContainer>

)


}

}




















export default Inventory