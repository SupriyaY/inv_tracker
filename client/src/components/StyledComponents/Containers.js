import React from 'react'
import styled from 'styled-components'
import Inventory from './img/boxes.jpg'
import Merchandise from './img/merch.jpg'
import Clothing from './img/clothing.jpg'
import Supplier from './img/supplier.jpg'

//page container

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
 background: url(${Inventory}) center no-repeat;
background-size: cover;
`

export const SingleOwnerContainer = Container.extend`
 background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Clothing}) center no-repeat;
background-size: cover;
`

export const SupplierContainer = Container.extend`
 background:linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Supplier}) center no-repeat;
background-size: cover;
`



export default {
ContainerHome,
Container,
BusinessOwnersContainer,
SingleOwnerContainer,
SupplierContainer

}