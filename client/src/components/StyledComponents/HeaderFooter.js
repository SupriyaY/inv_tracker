import React from 'react'
import styled from 'styled-components'
import Link from './img/logo.png'


const Logo = styled.img`
margin-top: 1vh;
margin-left: 3vw;
height:80%;
width: auto;
&:hover{
    margin-top:1.3vh;
}
`

export const Header = styled.header`
   height: 10vh;
    width: 100vw;
    background-color: #2B3B53;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`


export const Footer = styled.header`
height: 10vh;
width: 100vw;
background-color: #2B3B53;
align-self: flex-end;
`

export const HomeHeader = Header.extend`
background-color: white;
position: fixed;

`


export default{
Header, Footer,
HomeHeader,
Logo
}