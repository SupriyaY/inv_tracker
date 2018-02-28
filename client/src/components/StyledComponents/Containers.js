import React from 'react'
import styled from 'styled-components'
import Inventory from './img/boxes.jpg'
import Merchandise from './img/merch.jpg'
import Clothing from './img/clothing.jpg'
import Supplier from './img/supplier.jpg'



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
    justify-content: space-around;
    align-items: center;
    flex: 1 0 auto;
    
    `
export const BusinessOwnersContainer = Container.extend`
 background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Clothing}) center no-repeat;
background-size: cover;
`
export const ContainerHome = Container.extend`
 background: linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Inventory}) center no-repeat;
background-size: cover;
width: 100vw;
min-height: 80vh;
`

export const SingleOwnerContainer = Container.extend`
 background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Clothing}) center no-repeat;
background-size: cover;
`

export const SupplierContainer = Container.extend`
 background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Supplier}) center no-repeat;
background-size: cover;
`

export const WordsContainer = styled.div`
        height: 80vh;
        width: 30vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        color: white;
        text-align: center;
        
        h1{
            font-family: 'Patua One', cursive;
            font-size: 3em;
            margin: 0;
        }
        p{
            font-size: 1.5em;
        }
        a{
            font-size: 4em;
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