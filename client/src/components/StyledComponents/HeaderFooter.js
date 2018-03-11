import React from 'react'
import styled from 'styled-components'
import Link from './img/logo.png'


const Logo = styled.img`
margin-top: 1vh;
margin-left: 3vw;
height: 80%;
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
background-color: white;
align-self: flex-end;
`

export const HomeHeader = Header.extend`
background-color: white;
overflow: hidden;
/* position: fixed; */
 
 a{
margin-bottom: 1vh;
margin-left: 3vw;
height: 80%;
width: auto;
text-decoration: none;
color: black;
font-size: 1em;
    &:hover{
color: blue
    } 
 img {
     height: 8vh;

 }
}
`


export default {
    Header, 
    Footer,
    HomeHeader,
    Logo,
}