import React, {Component} from 'react'
import {ContainerHome} from './StyledComponents/Containers'
import Inventory from './StyledComponents/img/boxes.jpg'
import {Header, Footer} from './StyledComponents/HeaderFooter'
import { Link } from 'react-router-dom'

 
class Homepage extends Component{

render() {

return (

<div>
<ContainerHome>




 <Link to ="/users">Business Owners</Link> 
</ContainerHome>
</div>
)
}

}

export default Homepage;