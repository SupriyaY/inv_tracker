import React, {Component} from 'react'
import {ContainerHome} from './StyledComponents/Containers'
import Inventory from './StyledComponents/img/boxes.jpg'
import {Header, Footer} from './StyledComponents/HeaderFooter'
import { Link } from 'react-router-dom'
import {PageHolder} from './StyledComponents/Containers'
import {WordsContainer} from './StyledComponents/Containers'
import {SupplierContainer} from './StyledComponents/Containers'
 
class Homepage extends Component{

render() {

return (

<div>
<SupplierContainer>

            <Link to="/business_owners">Welcome, Business Owners</Link> 


</SupplierContainer>


<WordsContainer>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.</p>
        <Link to="/business_owners">Business Owners</Link> 
            <Link to="/categories">Categories</Link> 
</WordsContainer>

<ContainerHome>
    </ContainerHome>

</div>
)
}

}

export default Homepage;