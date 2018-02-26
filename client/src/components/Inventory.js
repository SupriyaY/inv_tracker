import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import { SingleOwnerContainer } from './StyledComponents/Containers'


class Inventory extends Component {

render (){

return (

<SingleOwnerContainer>    
    Hello from the inventory page!
    
    <Link to="/inventories/:id/suppliers">Supplier</Link>
</SingleOwnerContainer>

)


}

}




















export default Inventory