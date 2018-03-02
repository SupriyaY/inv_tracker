import React from 'react'
import styled from 'styled-components'
import Inventory from './img/boxes.jpg'
import Merchandise from './img/merch.jpg'
import Clothing from './img/clothing.jpg'
import Supplier from './img/supplier.jpg'
import Style from './img/store.jpg'



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
    width: 100%;
    height: 100vh;
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
`


export const SingleOwnerContainer = Container.extend`
 background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Clothing}) center no-repeat;
background-size: cover;
`

export const SupplierContainer = Container.extend`
 background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Supplier}) center no-repeat;
 width: 100vw;
 min-height: 60vh;
background-size: cover;
`

export const WordsContainer = styled.div`
        height: 60vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        color: black; 
        
        h1{
            font-family: 'Patua One', cursive;
            font-size: 3em;
            margin: 0;
        }
        p{
            font-size: 1.5em;
        } 
        a{
            font-size: 1em;
            font-family: 'Lobster', cursive;
            color: Black;
            text-decoration: none;
            :hover {
                color:#blue;
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