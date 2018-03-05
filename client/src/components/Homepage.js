import React, {Component} from 'react'
import {ContainerHome} from './StyledComponents/Containers'
import Inventory from './StyledComponents/img/boxes.jpg'
import {Header, Footer} from './StyledComponents/HeaderFooter'
import { Link } from 'react-router-dom'
import {PageHolder} from './StyledComponents/Containers'
import {WordsContainer} from './StyledComponents/Containers'
import {SupplierContainer} from './StyledComponents/Containers'
import styled from 'styled-components'





 
class Homepage extends Component{

render() {

return (

<div>
<SupplierContainer>

            {/* <Link to="/business_owners">Welcome, Business Owners</Link>  */}
<h1>Welcome to Link.</h1>

</SupplierContainer>


<WordsContainer>

                <p>Welcome to Link.  Let's create a space for you, as a retail business owner, to connect with
                 other like-minded retail business owners. </p>
                <p> What types of inventories are they purchasing and who the supplier? At Link, we want to able to get all of these questions 
                 answered for you. When you select the link "Business Owners below, you can view all of the business owners.  Click on each owmer's business card to
                 view to learn more about their business, inventory, and supplier. You can add yourself as a business owner and become part our community! 
                 </p>       
                
        <Link to="/business_owners">Business Owners</Link> 
            <Link to="/categories">Categories</Link> <p>Under Contruction</p>
            
</WordsContainer>

<ContainerHome>

            <h1>The most courageous act is still to think for yourself. Aloud. <br/> -Coco Channel
            </h1>
    </ContainerHome>

</div>
)
}

}

export default Homepage;