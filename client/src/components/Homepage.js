import React, {Component} from 'react'
import {ContainerHome} from './StyledComponents/Containers'
import Inventory from './StyledComponents/img/boxes.jpg'
import {Header, Footer} from './StyledComponents/HeaderFooter'
import { Link } from 'react-router-dom'
import {PageHolder} from './StyledComponents/Containers'
import {WordsContainer} from './StyledComponents/Containers'

 
class Homepage extends Component{

render() {

return (

<div>
<ContainerHome>




</ContainerHome>


<WordsContainer>
        <Link to="/business_owners">Welcome, Business Owners</Link> 
</WordsContainer>
</div>
)
}

}

export default Homepage;