import React from 'react'
import styled from 'styled-components'
import Inventory from './img/boxes.jpg'
import Merchandise from './img/merch.jpg'



export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 0 auto;
    
    `
export const BusinessOwnersContainer = Container.extend`
 background: url(${Merchandise}) center no-repeat;
background-size: cover;
`
export const ContainerHome = Container.extend`
 background: url(${Inventory}) center no-repeat;
background-size: cover;
`

export const SingleOwnerContainer = Container.extend`
 background: url(${Merchandise}) center no-repeat;
background-size: cover;
`





export default {
ContainerHome,
Container,
BusinessOwnersContainer,
SingleOwnerContainer

}