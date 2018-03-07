import React from 'react'
import styled from 'styled-components'
import Inventory from './img/boxes.jpg'
import Merchandise from './img/merch.jpg'
import Clothing from './img/clothing.jpg'
import Supplier from './img/supplierstwo.jpg'



export const PageHolder = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#F7F9F9;

`

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex: 1 0 auto; */
    
    `
export const BusinessOwnersContainer = Container.extend`
 background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Clothing}) center no-repeat;
background-size: cover;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
 
`
export const ContainerHome = Container.extend`
 background: linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)),url(${Clothing}) center no-repeat;
background-size: cover;
width: 100vw;
min-height: 100vh;
   h1{
color: white;
text-align: center;

    }
`


export const SingleOwnerContainer = Container.extend`
 background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Clothing}) center no-repeat;
background-size: cover;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
 img{
     height: 80px;
 }
`

export const SupplierContainer = Container.extend`
 background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Supplier}) center no-repeat;
 width: 100vw;
 height: 60vh;
background-size: cover;
 h1{
color: white;
text-align: center;
font-size: 2em;
    }
`

export const WordsContainer = styled.div`
        min-height: 70vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: black; 
      
        p{
            font-size: 1.5em;
            margin: 30px;
            font-family: 'Quicksand', sans-serif;
        } 
        a{
            font-size: 1.5em;
            font-family: sans-serif;
            color: Black;
            text-decoration: none;
            font-family: 'Quicksand', sans-serif;

            :hover {
                color: blue;
            }
        } 

`


export default {
ContainerHome,
Container,
BusinessOwnersContainer,
SingleOwnerContainer,
SupplierContainer,
PageHolder,
WordsContainer
}